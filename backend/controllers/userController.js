const db = require("../models");
const UserService = require("../services/usersService");

class userController {

    userService = new UserService();


    createOrUpdateUser = (req, res) => {

        if (!req.body.email || req.body.name
            || !req.body.surname || !req.body.image_url) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }

        const user = {
            email: req.body.email,
            name: req.body.name,
            surname: req.body.surname,
            image_url: req.body.image_url,
            role: "user",
            punctuation_avg: 0,
        };

        if (!this.userService.findOne(user.email)) {

            this.userService.createUser(user)
                .then(data => {
                    res.status(201).json(data);
                })
                .catch(err => {
                    res.status(500).json({
                        message:
                            err + " Some error occurred while creating the User."
                    });
                });

        } else {
            const user = {
                email: req.body.email,
                name: req.body.name,
                surname: req.body.surname,
                image_url: req.body.image_url,
            };

            this.userService.update(user)
                .then(num => {
                    if (num == 1) {
                        res.status(201).json({
                            message: "User was updated successfully."
                        });
                    } else {
                        res.json({
                            message: `Cannot update User with username=${user.email}. Maybe User was not found or request body is empty!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).json({
                        message:
                            err + " Error updating User with username=" + user.email
                    });
                });
        }
    };


    findAllUsers = (req, res) => {
        this.userService.findAll()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Some error occurred while retrieving users."
                });
            });
    };


    findOneUser = (req, res) => {

        const username = req.params.email;

        this.userService.findOne(username)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Error retrieving user with username=" + user.email
                });
            });
    };

    getUserPosition = (req, res) => {

        const username = req.params.email;

        this.userService.findAll()
            .then(data => {
               
                let position= data.map((users)=>{
                    return users.email
                })

                res.status(200).json(1+position.indexOf(username));
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Error retrieving user with username=" + user.email
                });
            });
    };


    /*  updateUser = (req, res) => {
 
         if (!req.body.email || req.body.name
             || !req.body.surname || !req.body.image_url) {
             res.status(400).json({
                 message: "Content cannot be empty!"
             });
             return;
         }
 
         const user = {
             email: req.body.email,
             name: req.body.name,
             surname: req.body.surname,
             image_url: req.body.image_url,
             role: "user",
         };
         this.userService.update(user)
             .then(num => {
                 if (num == 1) {
                     res.status(201).json({
                         message: "User was updated successfully."
                     });
                 } else {
                     res.json({
                         message: `Cannot update User with username=${user.email}. Maybe User was not found or request body is empty!`
                     });
                 }
             })
             .catch(err => {
                 res.status(500).json({
                     message:
                         err + " Error updating User with username=" + user.email
                 });
             });
     }; */


    updateUserPunctuationAvg = (req, res) => {

        if (!req.body.email) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }

        const user = {
            email: req.body.email,
            punctuation_avg: req.body.punctuation_avg,

        };
        this.userService.update(user)
            .then(num => {
                if (num == 1) {
                    res.status(201).json({
                        message: "User was updated successfully."
                    });
                } else {
                    res.json({
                        message: `Cannot update User with username=${user.email}. Maybe User was not found or request body is empty!`
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Error updating User with username=" + user.email
                });
            });
    };


    deleteUser = (req, res) => {

        const username = req.params.email;

        this.userService.deleteOne(username)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "User was deleted successfully!"
                    });
                } else {
                    res.json({
                        message: `Cannot delete User with username=${user.email}. Maybe user was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message:
                        err + " Could not delete User with username=" + user.email
                });
            });
    }
}

module.exports = userController;
