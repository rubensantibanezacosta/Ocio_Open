package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.entities.Assistants;
import com.ocio.backend17.entities.Comments;
import com.ocio.backend17.services.IComments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.Access;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CommentsController {
    @Autowired
    IComments iComments;

    @PostMapping(value="/api/comments", consumes = "application/json")
    @ResponseBody
    ResponseEntity<?> createOrUpdateComment(@RequestBody String jsonComment) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Comments comment=om.readValue(jsonComment, Comments.class);
        if(!(comment.getEventid()>0)){
            return new ResponseEntity<>(new ResponseMessageDto("Fields cannot be emplty"), HttpStatus.BAD_REQUEST);
        }else{
            return new ResponseEntity<>(iComments.addComment(comment), HttpStatus.CREATED);
        }
    }
    @GetMapping("/api/comments/byevent/{event_id}")
    ResponseEntity<List<Comments>> getAll(@PathVariable("event:id") Double event_id){
        return new ResponseEntity<>(iComments.findByEventId(event_id), HttpStatus.OK);

    }

    @DeleteMapping("/api/user/{comment_id}/{index}")
    @ResponseBody
    ResponseEntity<ResponseMessageDto> deleteByEmail(@PathVariable("comment_id") String email){
        if(iUsers.getById(email).isPresent()) {
            iUsers.deleteById(email);
            return new ResponseEntity<>(new ResponseMessageDto("User deleted"), HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(new ResponseMessageDto("User not found"), HttpStatus.NO_CONTENT);
        }
    }

}
