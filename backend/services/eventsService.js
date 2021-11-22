const { sequelize } = require("../models");
const db = require("../models");
const Events = db.events;
const Users = db.users;
const Assistants = db.assistants;
const Comments = db.comments;
const { Op } = require("sequelize");

class EventsService {

  async createEvent(event) {
    return Events.create(event);
  }

  async findAllEventsASC() {
    return Events.findAll({
      order:[['date','ASC']],
      include: [{
        model: Users,
        as: "organizerdata",
        attributes: ['name', 'surname', 'punctuation_avg']
      },
      {
        model: Assistants,
        include:{
          model:Users,
          attributes: ['name', 'surname', 'punctuation_avg']
        },
        as: "assistants",
        attributes: ['assistant', 'attendance', 'excuse'],
      },
      {
        model: Comments,
        attributes: ['comment'],
        include:{
          model:Users,
          attributes: ['name', 'surname']
        }
      }],

    });
  }

  async findAllEventsDESC() {
    return Events.findAll({
      order:[['date','DESC']],
      include: [{
        model: Users,
        as: "organizerdata",
        attributes: ['name', 'surname', 'punctuation_avg']
      },
      {
        model: Assistants,
        include:{
          model:Users,
          attributes: ['name', 'surname', 'punctuation_avg']
        },
        as: "assistants",
        attributes: ['assistant', 'attendance', 'excuse'],
      },
      {
        model: Comments,
        attributes: ['comment'],
        include:{
          model:Users,
          attributes: ['name', 'surname']
        }
      }],

    });
  }
  async findEventsByDate(date) {

    return Events.findAll(
      {
        where:
        {
          date: {
            [Op.between]: [new Date(date + " 00:00:00"), new Date(date + " 23:59:59")]
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