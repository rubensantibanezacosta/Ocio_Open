package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.dto.ResponseMessage;
import com.ocio.backend17.dto.UsersDto;
import com.ocio.backend17.entities.Users;
import com.ocio.backend17.services.IUsersImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

public class UsersController {
@Autowired
IUsersImpl iUsersImpl;
private Logger logger= LoggerFactory.getLogger(UsersController.class);
    @PreAuthorize("hasAuthority('read:users')")
    @GetMapping("/api/user")
    List<Users> getAll(){
        logger.debug("request arrived users");
        return iUsersImpl.getAll();
    }
    @PreAuthorize("hasAuthority('read:users')")
    @GetMapping("/api/user/{email}")
     public ResponseEntity<?> getByEmail(@PathVariable("email") String email){
        System.out.println("por email request by id");
        System.out.println(email);
        if(iUsersImpl.getById(email).isPresent()){
         return new ResponseEntity<>(new UsersDto(iUsersImpl.getById(email).get()), HttpStatus.OK);
         }else{
            return new ResponseEntity<>(new UsersDto(), HttpStatus.OK);
        }
    }
    @PreAuthorize("hasAuthority('read:users')")
    @GetMapping("/api/user/position/{email}")
    public ResponseEntity<?> getUserPositionByEmail(@PathVariable("email") String email){
        return new ResponseEntity<>(iUsersImpl.getUserPosition(email), HttpStatus.OK);
    }
    @PreAuthorize("hasAuthority('delete:users')")
    @DeleteMapping("/api/user/{email}")
    @ResponseBody
    ResponseEntity<ResponseMessage> deleteByEmail(@PathVariable("email") String email){
        if(iUsersImpl.getById(email).isPresent()) {
            iUsersImpl.deleteById(email);
            return new ResponseEntity<>(new ResponseMessage("User deleted"), HttpStatus.NO_CONTENT);
        }else{
            return new ResponseEntity<>(new ResponseMessage("User not found"), HttpStatus.NO_CONTENT);
        }
    }
    @PreAuthorize("hasAuthority('create:users')")
    @PostMapping(value="/api/user/", consumes = "application/json")
    @ResponseBody
    ResponseEntity<UsersDto> createOrUpdateUser(@RequestBody String jsonUser) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Users user=om.readValue(jsonUser,Users.class);
        return new ResponseEntity<>(new UsersDto(iUsersImpl.createOrUpdate(user)), HttpStatus.CREATED);
    }


}