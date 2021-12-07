const db = require("../models");
const ZonesService = require("../services/zonesService");

class ZonesController {

    zonesService = new ZonesService();


    createOrUpdateZone = (req, res) => {

        if (!req.body.id || req.body.punctuationavg
            || !req.body.name) {
            res.status(400).json({
                message: "Content cannot be empty!"
            });
            return;
        }

        const zone = {
            id:req.body.id,
            name:req.body.name,
            punctuationavg:req.zone.punctuationavg
        };

        if (!this.zonesService.findOneZone(zone.id)) {

            this.zonesService.createZone(zone)
                .then(data => {
                    res.status(201).json(data);
                })
                .catch(err => {
                    res.status(500).json(
                            err + " Some error occurred while creating the Zone."
                    );
                });

        } else {

            this.zonesService.updateZone(zone)
                .then(num => {
                    if (num == 1) {
                        res.status(201).json({
                            message: "Zone was updated successfully."
                        });
                    } else {
                        res.json({
                            message: `Cannot update Zone ${zone.name}. Maybe Zone was not found or request body is empty!`
                        });
                    }
                })
                .catch(err => {
                    res.status(500).json(

                            err + " Error updating Zone with " + zone.name
                    );
                });
        }
    };


    findAllZones = (req, res) => {
        this.zonesService.findAllZones()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(

                        err + " Some error occurred while retrieving Zones."
                );
            });
    };


    findOneZone = (req, res) => {

        const id = req.params.id;

        this.zonesService.findOneZone(id)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => {
                res.status(500).json(

                        err + " Error retrieving Zone with id=" + id
                );
            });
    };


    deleteZone = (req, res) => {

        const id = req.params.id;

        this.zonesService(id)
            .then(num => {
                if (num == 1) {
                    res.status(200).json({
                        message: "Zone was deleted successfully!"
                    });
                } else {
                    res.json({
                        message: `Cannot delete Zone with id=${id}. Maybe Zone was not found!`
                    });
                }
            })
            .catch(err => {
                res.status(500).send(
                        err + " Could not delete Zone with id=" + id
                );
            });
    }
}

module.exports = ZonesController;
