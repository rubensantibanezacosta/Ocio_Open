const { sequelize } = require("../models");
const db = require("../models");
const Events = db.events;
const { Op } = require("sequelize");

class EventsService {

  async createEvent(event) {
    return Events.create(event);
  }

  async findAllEvents() {
    return Events.findAll();
  }

  async findEventsByDate(date) {

    return Events.findAll(
      {
        where:
        {
          date: {
            [Op.between]: [new Date(date+" 00:00:00"), new Date(date+" 23:59:59")]
          }
        }
      });
  }

  async findEventsByOrganizer(organizer) {
    return Events.findAll({ where: { organizer: organizer } });
  }

  async findEventsByZone(zone) {
    return Events.findAll({ where: { zone: zone } });
  }

  

  async findOneEventById(event_id) {
    return Events.findByPk(event_id);
  }

  async updateEvent(event) {
    return Events.update(event, {
      where: { event_id: event.event_id }
    })
  }

  async deleteEvent(event_id) {
    return Events.destroy({
      where: { event_id: event_id }
    })
  }
}

module.exports = EventsService;