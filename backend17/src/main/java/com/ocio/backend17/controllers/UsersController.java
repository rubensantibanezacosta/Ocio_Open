package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.dto.UsersDto;
import com.ocio.backend17.entities.Users;
import com.ocio.backend17.services.IUsers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("api/user")
public class UsersController {
@Autowired
IUsers iUsers;

    @GetMapping("/")
    List<Users> getAll(){
        return iUsers.getAll();
    }

    @GetMapping("/{email}")
    ResponseEntity<?> getByEmail(@RequestParam String email){
        if(iUsers.getById(email).isPresent()){
         return new ResponseEntity<>(new UsersDto(iUsers.getById(email).get()), HttpStatus.OK);
         }else{
            return new ResponseEntity<>(new UsersDto(), HttpStatus.OK);
        }
    }

    @GetMapping("/position/{email}")
    ResponseEntity<?> getUserPositionByEmail(@RequestParam String email){
        return new ResponseEntity<>(iUsers.getUserPosition(email), HttpStatus.OK);
    }

    @DeleteMapping("/email")
    @ResponseBody
    ResponseEntity<ResponseMessageDto> deleteByEmail(@RequestParam String email){
        if(iUsers.getById(email).isPresent()) {
            iUsers.deleteById(email);
            return new ResponseEntity<>(new ResponseMessageDto("User deleted"), HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(new ResponseMessageDto("User not found"), HttpStatus.NO_CONTENT);
        }
    }

    @PostMapping(value="/", consumes = "application/json")
    @ResponseBody
    ResponseEntity<UsersDto> createOrUpdateUser(@RequestBody String jsonUser) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Users user=om.readValue(jsonUser,Users.class);
        return new ResponseEntity<>(new UsersDto(iUsers.createOrUpdate(user)), HttpStatus.CREATED);
    }


}