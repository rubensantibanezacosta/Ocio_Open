const UsersService = require("../services/usersService");
const EventsService = require("../services/eventsService");
const ZonesService = require("../services/zonesService");
const PunctuationsService = require("../services/punctuationsService");

class AvgPunctuationUpdater {


    async updateEventAvgPunctuation(event_id) {

        const eventsService = new EventsService();
        const punctuationsService = new PunctuationsService();

        let totalPunctuation = 0;
        let average = await punctuationsService.findPunctuationsByEvent(event_id).then((data) => {
            if(data.length>0){
                data.forEach(punctuation => {
                    totalPunctuation += punctuation.punctuation;
                })
                return totalPunctuation / data.length
            }
            
        });

        const event = {
            event_id: event_id,
            punctuationavg: average
        }

        return eventsService.updateEvent(event);
    };


    async updateUserAvgPunctuation(organizer) {

        const usersService = new UsersService();
        const punctuationsService = new PunctuationsService();

        let totalPunctuation = 0;
        let average = await punctuationsService.findPunctuationByOrganizer(organizer).then((data) => {
            if(data.length>0){

                data.forEach(punctuation => {
                    totalPunctuation += punctuation.punctuation;
                })
                return totalPunctuation / data.length
            }
        });

        const user = {
            email: organizer,
            punctuation_avg: average
        }

        return usersService.update(user);
    };


    async updateZonesAvgPuntuacions() {
        const eventsService = new EventsService();
        const punctuationsService = new PunctuationsService();
        const zonesService = new ZonesService();
        const allPunctuation = await punctuationsService.findAllPunctuations();

        //Filter events by zone

        const GCEvents = (await eventsService.findEventsByZone("GC")).map((event) => {
            if (event.zone.toLowerCase() == event.zone.toLowerCase()) { return event }
        });

        const TNFEvents = (await eventsService.findEventsByZone("TNF")).map((event) => {
            if
                (event.zone.toLowerCase() == event.zone.toLowerCase()) { return event }
        });
        const VIRTUALEvents = (await eventsService.findEventsByZone("VIRTUAL")).map((event) => {
            if
                (event.zone.toLowerCase() == event.zone.toLowerCase()) { return event }
        });

        //Get puntuations of events by zone

        const GCEventsPunctuations = [];
        if (GCEvents[0]) {
            await GCEvents.forEach(element => {

                GCEventsPunctuations.push(allPunctuation.filter((punctuation) => { return punctuation.event_id = element }))
            })
        }


        const TNFEventsPunctuations = [];
        if (GCEvents[0]) {
            await TNFEvents.forEach(element => {
                TNFEventsPunctuations.push(allPunctuation.filter((punctuation) => { return punctuation.event_id = element }))
            })
        }

        const VIRTUALEventsPunctuations = [];
        if (VIRTUALEvents[0]) {
            await VIRTUALEvents.forEach(element => {
                VIRTUALEventsPunctuations.push(allPunctuation.filter((punctuation) => { return punctuation.event_id = element }))
            })
        }

        //Calculate average punctuations of events by zone

        let GCAveragePunctuation = 0;
        let totalPunctuationGC = 0;
        let totalSizeGC = 0;

        if (GCEventsPunctuations[0]) {
            await GCEventsPunctuations.forEach((punctuation) => {

                punctuation.forEach((subPunctuation) => {
                    totalSizeGC += 1;
                    totalPunctuationGC += subPunctuation.punctuation;
                })

            })
            GCAveragePunctuation = totalPunctuationGC / totalSizeGC;

        }


        let TNFAveragePunctuation = 0;
        let totalPunctuationTNF = 0;
        let totalSizeTNF = 0;

        if (TNFEventsPunctuations[0]) {
            await TNFEventsPunctuations.forEach((punctuation) => {

                punctuation.forEach((subPunctuation) => {
                    totalSizeTNF += 1;
                    totalPunctuationTNF += subPunctuation.punctuation;
                })

            })
            TNFAveragePunctuation = totalPunctuationTNF / totalSizeTNF;
        }

        let VIRTUALAveragePunctuation = 0;
        let totalPunctuationVIRTUAL = 0;
        let totalSizeVIRTUAL = 0;

        if (VIRTUALEventsPunctuations[0]) {
            await VIRTUALEventsPunctuations.forEach((punctuation) => {

                punctuation.forEach((subPunctuation) => {
                    totalSizeVIRTUAL += 1;
                    totalPunctuationVIRTUAL += subPunctuation.punctuation;
                })

            })
            VIRTUALAveragePunctuation = totalPunctuationVIRTUAL / totalSizeVIRTUAL;
        }

        //update zones with punctuations average

        const GC = {
            id: "GC",
            punctuationavg: GCAveragePunctuation
        }
        const TNF = {
            id: "TNF",
            punctuationavg: TNFAveragePunctuation
        }
        const VIRTUAL = {
            id: "VIRTUAL",
            punctuationavg: VIRTUALAveragePunctuation
        }

        return (zonesService.updateZone(GC), zonesService.updateZone(TNF), zonesService.updateZone(VIRTUAL));
    };

    async updateAvgPunctuations(event_id, organizer) {
        return (this.updateEventAvgPunctuation(event_id), this.updateUserAvgPunctuation(organizer), this.updateZonesAvgPuntuacions())
    };
}

module.exports = AvgPunctuationUpdater;