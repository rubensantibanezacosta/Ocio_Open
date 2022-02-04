package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.entities.Assistants;
import com.ocio.backend17.entities.AssistantsPK;
import com.ocio.backend17.services.IAsisstant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class AssistantController {
    @Autowired
    IAsisstant iAsisstant;

    @PostMapping(value="/api/assistant", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> createOrUpdateUser(@RequestBody String jsonAssistant) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Assistants assistant=om.readValue(jsonAssistant,Assistants.class);
        if(!(assistant.getEventid()>0)){
            return new ResponseEntity<>(new ResponseMessageDto("Fields cannot be emplty"), HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(iAsisstant.add(assistant), HttpStatus.CREATED);
        }
    }

    @GetMapping("/api/assistant/bypk/{event_id}/{assistant}")
    ResponseEntity<?> getByPk(@PathVariable("event_id") Double event_id,@PathVariable("assistant") String assistant){

        if(iAsisstant.findByPk(new AssistantsPK(event_id, assistant)).isPresent()){
            return new ResponseEntity<>(iAsisstant.findByPk(new AssistantsPK(event_id, assistant)).get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Assistants(), HttpStatus.OK);
        }
    }

    @GetMapping("/api/assistant/byevent/{event_id}")
    ResponseEntity<List<Assistants>> getByEvent(@PathVariable("event_id") Double event_id){
            return new ResponseEntity<>(iAsisstant.findByEventAndAttendance(event_id,true), HttpStatus.OK);
    }

    @GetMapping("/api/assistant/byeventnot/{event_id}")
    ResponseEntity<List<Assistants>> getByEventNot(@PathVariable("event_id") Double event_id){
        return new ResponseEntity<>(iAsisstant.findByEventAndAttendance(event_id,false), HttpStatus.OK);
    }

    @GetMapping("/api/assistant")
    ResponseEntity<List<Assistants>> getAll(){
        return new ResponseEntity<>(iAsisstant.findAll(), HttpStatus.OK);
    }

    @PutMapping("/api/assistant")
    ResponseEntity<?> updateAssistant(@RequestBody String jsonAssistant) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Assistants assistant=om.readValue(jsonAssistant,Assistants.class);
        return new ResponseEntity<>(iAsisstant.updateAssistant(assistant),HttpStatus.OK);
    }

}
