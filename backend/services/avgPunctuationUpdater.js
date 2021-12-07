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
            
            if(data[0]){
                data.forEach(punctuation => {
                    
                    totalPunctuation += punctuation.punctuation;
                })
                
                return totalPunctuation / data.length
            }
            
        });
        

        const event = {
            event_id: event_id,
            punctuation_avg: average
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
        

        //Filter events by zone

        const GCEvents = (await eventsService.findEventsByZone("GC")).map((event) => {
            if (event.zone.toLowerCase() == event.zone.toLowerCase()) { 
                return event }
        });

        const TNFEvents = (await eventsService.findEventsByZone("TNF")).map((event) => {
            if
                (event.zone.toLowerCase() == event.zone.toLowerCase()) { 
                    
                    return event }
        });
        const VIRTUALEvents = (await eventsService.findEventsByZone("VIRTUAL")).map((event) => {
            if
                (event.zone.toLowerCase() == event.zone.toLowerCase()) { return event }
        });

        

      

        //Calculate average punctuations of events by zone

        let GCAveragePunctuation = 0;
        let totalPunctuationGC = 0;
        let totalSizeGC = 0;

        if (GCEvents[0]) {
            await GCEvents.forEach((event) => {

                    totalSizeGC += 1;
                    totalPunctuationGC += event.punctuation_avg;
                
            })
            GCAveragePunctuation = totalPunctuationGC / totalSizeGC;
        }


        let TNFAveragePunctuation = 0;
        let totalPunctuationTNF = 0;
        let totalSizeTNF = 0;

        if (TNFEvents[0]) {
            await TNFEvents.forEach((event) => {

                    totalSizeTNF += 1;
                    totalPunctuationTNF += event.punctuation_avg;
                
            })
            TNFAveragePunctuation = totalPunctuationTNF / totalSizeTNF;
        }

        let VIRTUALAveragePunctuation = 0;
        let totalPunctuationVIRTUAL = 0;
        let totalSizeVIRTUAL = 0;

        if (VIRTUALEvents[0]) {
            await VIRTUALEvents.forEach((event) => {

                    totalSizeVIRTUAL += 1;
                    totalPunctuationVIRTUAL += event.punctuation_avg;
                
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