package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.entities.Comments;

import com.ocio.backend17.services.ICommentsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CommentsController {
    @Autowired
    ICommentsImpl iCommentsImpl;

    @PostMapping(value="/api/comments", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> createOrUpdateComment(@RequestBody String jsonComment) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Comments comment=om.readValue(jsonComment, Comments.class);
        if(!(comment.getEvent_id()>0)){
            return new ResponseEntity<>(new ResponseMessageDto("Fields cannot be empty"), HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(iCommentsImpl.addComment(comment), HttpStatus.CREATED);
        }
    }
    @GetMapping("/api/comments/byevent/{event_id}")
    ResponseEntity<List<Comments>> getAll(@PathVariable("event_id") Double event_id){
        return new ResponseEntity<>(iCommentsImpl.findByEventId(event_id), HttpStatus.OK);

    }

    @DeleteMapping("/api/user/{comment_id}/{index}")
    @ResponseBody
    ResponseEntity<ResponseMessageDto> deleteByEmail(@PathVariable("comment_id") Double id, @PathVariable("index") int index){
        if(iCommentsImpl.findbyId(id).isPresent()) {
            iCommentsImpl.deleteById(id);
            return new ResponseEntity<>(new ResponseMessageDto("User deleted", index), HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(new ResponseMessageDto("User not found"), HttpStatus.NO_CONTENT);
        }
    }

}
