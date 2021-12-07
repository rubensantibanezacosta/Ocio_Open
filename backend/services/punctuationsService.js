const db = require("../models");
const Punctuations = db.punctuations;

const EventsService = require("./eventsService")

class PunctuationsService {

    async createPunctuation(punctuation) {
        return Punctuations.create(punctuation);
    }

    async findAllPunctuations() {
        return Punctuations.findAll();
    }

    async findPunctuationsByEvent(event_id) {
        return Punctuations.findAll({ where: { event_id: event_id } });
    }

    async findPunctuationByOrganizer(organizer) {
        const eventsService = new EventsService();
        const eventsByOrganizer = (await eventsService.findEventsByOrganizerDESC(organizer)).map((event) => { return event.event_id });
        const allPunctuation = await Punctuations.findAll();
        const punctuationsByOrganizer = []
        await eventsByOrganizer.forEach(element => {
            punctuationsByOrganizer.push(allPunctuation.filter((punctuation) => { return punctuation.event_id = element }))
        });
        return punctuationsByOrganizer[0];
    }



    async findPunctuationByPk(event_id, assistant) {
        return Punctuations.findAll({
            where: {
                event_id: event_id, assistant: assistant
            }
        });
    }



    async updatePunctuation(punctuation) {
        return Punctuations.update(punctuation, {
            where: { event_id: punctuation.event_id, assistant: punctuation.assistant }
        })
    }

    async deletePunctuation(event_id, assistant) {
        return Punctuations.destroy({
            where: { event_id: event_id, assistant: assistant }
        })
    }
}

module.exports = PunctuationsService;