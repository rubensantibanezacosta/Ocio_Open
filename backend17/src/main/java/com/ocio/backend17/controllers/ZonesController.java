package com.ocio.backend17.controllers;

import com.ocio.backend17.entities.Zones;
import com.ocio.backend17.services.IZones;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/zones")
@RestController
public class ZonesController {
    @Autowired
    IZones iZones;

    @GetMapping("/")
    public ResponseEntity<List<Zones>> getAll(){
        return new ResponseEntity(iZones.getAll(), HttpStatus.OK);
    }
}
