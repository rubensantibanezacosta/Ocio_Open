package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessage;
import com.ocio.backend17.entities.Comments;
import com.ocio.backend17.entities.Events;
import com.ocio.backend17.security.ExtractHeaderData;
import com.ocio.backend17.services.ICommentsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EventsController {
    @Autowired
    ICommentsImpl iCommentsImpl;
    @Autowired

    ExtractHeaderData extractHeaderData;
//    @PreAuthorize("hasAuthority('create:events')")
//    @PostMapping(value="/api/comments", consumes = "application/json")
//    @ResponseBody
//    ResponseEntity<?> createEvent(@RequestBody String jsonEvent, @RequestHeader HttpHeaders headers) throws JsonProcessingException {
//        ObjectMapper om = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
//        Events event=om.readValue(jsonEvent, Events.class);
//        if(!(event.getEvent_id()>0)){
//            return new ResponseEntity<>(new ResponseMessage("Fields cannot be empty"), HttpStatus.BAD_REQUEST);
//        }else{
//            event.setAssistant(extractHeaderData.extractJWTUsername(headers));
//            return new ResponseEntity<>(iCommentsImpl.addComment(comment), HttpStatus.CREATED);
//        }
//    }

}
