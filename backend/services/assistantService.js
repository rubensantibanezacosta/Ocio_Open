const db = require("../models");
const Assistants = db.assistants;

class AssistantsService {

    async createAsisstant(assistant) {
        return Assistants.create(assistant);
    };

    async findAssistantByPk(event_id, asisstant) {
        return Assistants.findByPk(event_id, asisstant);
    };

    async findAllAssistantsByEvent(event_id) {
        return Assistants.findAll({
            where: {
                event_id: event_id, attendance: true
            }
        });
    };

    async findAllNotAssistantsByEvent(event_id) {
        return Assistants.findAll({
            where: {
                event_id: event_id, attendance: false
            }
        });
    };
    async findAllEventsByAssistant(email) {
        return Assistants.findAll({
            where: {
                assistant: email
            }
        });
    };

    async findAllAssistants() {
        return Assistants.findAll();
    };

    async updateAssistant(assistant) {
        return Assistants.update(assistant, {
            where: {
                event_id: assistant.event_id,
                assistant: assistant.assistant,
            }
        })
    }

    async deleteAssistantByPk(event_id, assistant) {
        return Assistants.destroy({
            where: { event_id: event_id, assistant: assistant }
        });
    };

}
module.exports = AssistantsService;