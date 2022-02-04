package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.dto.UsersDto;
import com.ocio.backend17.entities.Users;
import com.ocio.backend17.services.IUsersImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class UsersController {
@Autowired
IUsersImpl iUsersImpl;

    @GetMapping("/api/user")
    List<Users> getAll(){
        return iUsersImpl.getAll();
    }

    @GetMapping("/api/user/{email}")
    ResponseEntity<?> getByEmail(@PathVariable("email") String email){
        System.out.println("por email request by id");
        System.out.println(email);
        if(iUsersImpl.getById(email).isPresent()){
         return new ResponseEntity<>(new UsersDto(iUsersImpl.getById(email).get()), HttpStatus.OK);
         }else{
            return new ResponseEntity<>(new UsersDto(), HttpStatus.OK);
        }
    }

    @GetMapping("/api/user/position/{email}")
    ResponseEntity<?> getUserPositionByEmail(@PathVariable("email") String email){
        return new ResponseEntity<>(iUsersImpl.getUserPosition(email), HttpStatus.OK);
    }

    @DeleteMapping("/api/user/{email}")
    @ResponseBody
    ResponseEntity<ResponseMessageDto> deleteByEmail(@PathVariable("email") String email){
        if(iUsersImpl.getById(email).isPresent()) {
            iUsersImpl.deleteById(email);
            return new ResponseEntity<>(new ResponseMessageDto("User deleted"), HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(new ResponseMessageDto("User not found"), HttpStatus.NO_CONTENT);
        }
    }

    @PostMapping(value="/api/user/", consumes = "application/json")
    @ResponseBody
    ResponseEntity<UsersDto> createOrUpdateUser(@RequestBody String jsonUser) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Users user=om.readValue(jsonUser,Users.class);
        return new ResponseEntity<>(new UsersDto(iUsersImpl.createOrUpdate(user)), HttpStatus.CREATED);
    }


}