const db = require("../models");
const Assistants = db.assistants;
const Users = db.users;

class AssistantsService {

    async createAsisstant(assistant) {
        return Assistants.create(assistant);
    };

    async findAssistantByPk(event_id, assistant) {
        return Assistants.findAll({
            where: {
                event_id: event_id, assistant: assistant
            }
        });
    };

    async findAllAssistantsByEvent(event_id) {
        return Assistants.findAll({
            where: {
                event_id: event_id, attendance: true
            },
            include: {
                model: Users,
                attributes: ['name', 'surname', 'punctuation_avg']
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

  /*   async countAttendance(assistant) {
        return Assistants.findAll({
            where: {
                assistant: assistant, attendance: true
            }
        });
    }; */

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