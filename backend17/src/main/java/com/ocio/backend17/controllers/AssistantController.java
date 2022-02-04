package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.entities.Assistants;
import com.ocio.backend17.entities.AssistantsPK;
import com.ocio.backend17.services.IAssistantImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class AssistantController {
    @Autowired
    IAssistantImpl iAsisstantImpl;

    @PostMapping(value="/api/assistant", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> createOrUpdateUser(@RequestBody String jsonAssistant) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Assistants assistant=om.readValue(jsonAssistant,Assistants.class);
        if(!(assistant.getEvent_id()>0)){
            return new ResponseEntity<>(new ResponseMessageDto("Fields cannot be emplty"), HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(iAsisstantImpl.add(assistant), HttpStatus.CREATED);
        }
    }

    @GetMapping("/api/assistant/bypk/{event_id}/{assistant}")
    ResponseEntity<?> getByPk(@PathVariable("event_id") Double event_id,@PathVariable("assistant") String assistant){

        if(iAsisstantImpl.findByPk(new AssistantsPK(event_id, assistant)).isPresent()){
            return new ResponseEntity<>(iAsisstantImpl.findByPk(new AssistantsPK(event_id, assistant)).get(), HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new Assistants(), HttpStatus.OK);
        }
    }

    @GetMapping("/api/assistant/byevent/{event_id}")
    ResponseEntity<List<Assistants>> getByEvent(@PathVariable("event_id") Double event_id){
            return new ResponseEntity<>(iAsisstantImpl.findByEventAndAttendance(event_id,true), HttpStatus.OK);
    }

    @GetMapping("/api/assistant/byeventnot/{event_id}")
    ResponseEntity<List<Assistants>> getByEventNot(@PathVariable("event_id") Double event_id){
        return new ResponseEntity<>(iAsisstantImpl.findByEventAndAttendance(event_id,false), HttpStatus.OK);
    }

    @GetMapping("/api/assistant")
    ResponseEntity<List<Assistants>> getAll(){
        return new ResponseEntity<>(iAsisstantImpl.findAll(), HttpStatus.OK);
    }

    @PutMapping("/api/assistant")
    ResponseEntity<?> updateAssistant(@RequestBody String jsonAssistant) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Assistants assistant=om.readValue(jsonAssistant,Assistants.class);
        return new ResponseEntity<>(iAsisstantImpl.updateAssistant(assistant),HttpStatus.OK);
    }

}
