"use strict";
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + './../config/config')[env];
const transporter = require("../config/mailer");
const moment = require("moment");
const UsersService = require("./usersService");
const AssistanService = require("./assistantService");

class EmailsService {
    //Event created
    usersService = new UsersService();
    assistantService = new AssistanService();
    async newEventToOrganizer(organizer, event) {
        try {
            await transporter.sendMail({
                from: '"Ocio Open" <' + config.emailApiName + '>', // sender address
                to: organizer, // list of receivers
                subject: "Nuevo evento", // Subject line
                text: "", // plain text body
                html: ` <p>¡Enhorabuena ${organizer}! has creado un nuevo evento.</p><b>Haz click <a href="${config.frontendEndpoint}${moment(event.date).format("YY-M-D")}">aqui</a> para verlo</b>` // html body
            });
        } catch (error) {
            console.log(error);
        }
    }

    async newEventToAllUsers(organizer, event) {
        const userList = [];
        const userMail = [];
        this.usersService.findAll()
            .then((users) => {
                this.userList = users;
            })
            .then(() => {
                this.userMail =
                    this.userList
                        .filter((user) => {
                            return user.email != organizer;
                        })
                        .map((user) => {

                            return user.email;
                        })
            })
            .then(() => {
                this.userMail.forEach(async email => {
                    try {
                        await transporter.sendMail({
                            from: '"Ocio Open" <' + config.emailApiName + '>', // sender address
                            to: email, // list of receivers
                            subject: "Nuevo evento", // Subject line
                            text: "", // plain text body
                            html: ` <p>${organizer} ha creado un nuevo evento.</p><b>Haz click <a href="${config.frontendEndpoint}${moment(event.date).format("YY-M-D")}">aqui</a> para verlo</b>` // html body
                        });
                    } catch (error) {
                        console.log(error);
                    }
                });
            })
    }
    //Event updated

    async updateEventToOrganizer(organizer, event) {
        try {
            await transporter.sendMail({
                from: '"Ocio Open" <' + config.emailApiName + '>', // sender address
                to: organizer, // list of receivers
                subject: "Nuevo evento", // Subject line
                text: "", // plain text body
                html: ` <p>¡Enhorabuena ${organizer}! has hecho cambios en el evento con éxito.</p><b>Haz click <a href="${config.frontendEndpoint}${moment(event.date).format("YY-M-D")}">aqui</a> para verlo</b>` // html body
            });
        } catch (error) {
            console.log(error);
        }
    }

    async updateEventToAssistants(organizer, event) {
        const userList = [];
        const userMail = [];
        this.assistantService.findAllAssistantsByEvent(event.event_id
        )
            .then((users) => {
                this.userList = users;
            })
            .then(() => {
                this.userMail =
                    this.userList
                        .filter((user) => {
                            return user.email != organizer;
                        })
                        .map((user) => {

                            return user.email;
                        })
            })
            .then(() => {
                if (this.userMail[0]) {
                    this.userMail.forEach(async email => {

                        try {
                            await transporter.sendMail({
                                from: '"Ocio Open" <' + config.emailApiName + '>', // sender address
                                to: email, // list of receivers
                                subject: "Nuevo evento", // Subject line
                                text: "", // plain text body
                                html: ` <p>${organizer} ha hecho cambios en el evento al que vas a asistir.</p><b>Haz click <a href="${config.frontendEndpoint}${moment(event.date).format("YY-M-D")}">aqui</a> para verlo</b>` // html body
                            });
                        } catch (error) {
                            console.log(error);
                        }
                    });
                }
            })
    }
}

module.exports = EmailsService;