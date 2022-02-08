package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessage;
import com.ocio.backend17.entities.Assistants;
import com.ocio.backend17.entities.AssistantsPK;
import com.ocio.backend17.security.ExtractHeaderData;
import com.ocio.backend17.services.IAssistantImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class AssistantController {
    @Autowired
    IAssistantImpl iAsisstantImpl;
    @Autowired
    ExtractHeaderData extractHeaderData;

    @PreAuthorize("hasAuthority('create:assistants')")
    @PostMapping(value="/api/assistant", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> createOrUpdateUser(@RequestBody String jsonAssistant, @RequestHeader HttpHeaders headers) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Assistants assistant=om.readValue(jsonAssistant,Assistants.class);
        if(!(assistant.getEvent_id()>0)){
            return new ResponseEntity<>(new ResponseMessage("Fields cannot be empty"), HttpStatus.BAD_REQUEST);
        }else{
            assistant.setAssistant(extractHeaderData.extractJWTUsername(headers));
            return new ResponseEntity<>(iAsisstantImpl.add(assistant), HttpStatus.CREATED);
        }
    }

    @PreAuthorize("hasAuthority('read:assistants')")
    @GetMapping("/api/assistant/bypk/{event_id}/{assistant}")
    ResponseEntity<?> getByPk(@PathVariable("event_id") Double event_id,@PathVariable("assistant") String assistant){

        if(iAsisstantImpl.findByPk(new AssistantsPK(event_id, assistant)).isPresent()){
            return new ResponseEntity<>(iAsisstantImpl.findByPk(new AssistantsPK(event_id, assistant)).get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Assistants(), HttpStatus.OK);
        }
    }

    @PreAuthorize("hasAuthority('read:assistants')")
    @GetMapping("/api/assistant/byevent/{event_id}")
    ResponseEntity<List<Assistants>> getByEvent(@PathVariable("event_id") Double event_id){
            return new ResponseEntity<>(iAsisstantImpl.findByEventAndAttendance(event_id,true), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('read:assistants')")
    @GetMapping("/api/assistant/byeventnot/{event_id}")
    ResponseEntity<List<Assistants>> getByEventNot(@PathVariable("event_id") Double event_id){
        return new ResponseEntity<>(iAsisstantImpl.findByEventAndAttendance(event_id,false), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('read:assistants')")
    @GetMapping("/api/assistant")
    ResponseEntity<List<Assistants>> getAll(){
        return new ResponseEntity<>(iAsisstantImpl.findAll(), HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('update:assistants')")
    @PutMapping("/api/assistant")
    ResponseEntity<?> updateAssistant(@RequestBody String jsonAssistant, @RequestHeader HttpHeaders headers) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Assistants assistant=om.readValue(jsonAssistant,Assistants.class);
        assistant.setAssistant(extractHeaderData.extractJWTUsername(headers));
        return new ResponseEntity<>(iAsisstantImpl.updateAssistant(assistant),HttpStatus.OK);
    }

}
