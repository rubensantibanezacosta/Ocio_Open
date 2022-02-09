package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessage;
import com.ocio.backend17.entities.Comments;
import com.ocio.backend17.entities.Events;
import com.ocio.backend17.security.ExtractHeaderData;
import com.ocio.backend17.services.ICommentsImpl;
import com.ocio.backend17.services.IEventsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventsController {
    @Autowired
    IEventsImpl iEventsImpl;
    @Autowired

    ExtractHeaderData extractHeaderData;

    @PreAuthorize("hasAuthority('create:events')")
    @PostMapping(value = "/api/events", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> createEvent(@RequestBody String jsonEvent, @RequestHeader HttpHeaders headers)
            throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        Events event = om.readValue(jsonEvent, Events.class);
        if (!(event.getTittle()).equals("") || !(event.getPlace()).equals("") || !(event.getZone()).equals("")) {
            return new ResponseEntity<>(new ResponseMessage("Fields cannot be empty"), HttpStatus.BAD_REQUEST);
        } else {
            event.setOrganizer(extractHeaderData.extractJWTUsername(headers));
            return new ResponseEntity<>(iEventsImpl.createEvent(event), HttpStatus.CREATED);
        }
    }

    @PreAuthorize("hasAuthority('read:events')")
    @GetMapping(value = "/api/events/ASC", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> findAllEventsAsc() {
        return new ResponseEntity<>(iEventsImpl.findAllEventsAsc(), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('read:events')")
    @GetMapping(value = "/api/events/DESC", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> findAllEventsDsc() {
        return new ResponseEntity<>(iEventsImpl.findAllEventsDesc(), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('read:events')")
    @GetMapping(value = "/api/events/bydate/{date}", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> findAllEventsByDate(@PathVariable Date date) {
        return new ResponseEntity<>(iEventsImpl.findAllByDate(date), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('read:events')")
    @GetMapping(value = "/api/events/byorganizer/ASC/{organizer}", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> findAllEventsByOrganizerAsc(@PathVariable String organizer) {
        return new ResponseEntity<>(iEventsImpl.findAllByDate(date), HttpStatus.OK);
    }

//    @PreAuthorize("hasAuthority('read:events')")
//    @GetMapping(value = "/api/events/byorganizer/DESC/{organizer}", consumes = "application/json")
//    @ResponseBody
//    ResponseEntity<?> findAllEventsByOrganizerDesc(@PathVariable String organizer) {
//        return new ResponseEntity<>(iEventsImpl.findAllByDate(date), HttpStatus.OK);
//    }
//
//    @PreAuthorize("hasAuthority('read:events')")
//    @GetMapping(value = "/api/events/byid/{event_id}", consumes = "application/json")
//    @ResponseBody
//    ResponseEntity<?> findAllEventsByDate(@PathVariable String organizer) {
//        return new ResponseEntity<>(iEventsImpl.findAllByDate(date), HttpStatus.OK);
//    }

}
