package com.ocio.backend17.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ocio.backend17.models.Users;
import com.ocio.backend17.services.IUsersImpl;
import org.springframework.beans.factory.annotation.Autowired;
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

    @GetMapping("/api/user/{id}")
    Users getById(@RequestParam String id){
        if(iUsersImpl.getById(id).isPresent()){
         return iUsersImpl.getById(id).get();
         }else{
         return null;
        }
    }

    @DeleteMapping("/api/user/id")
    @ResponseBody
    String deleteById(@RequestParam String id){
        iUsersImpl.deleteById(id);
        return "Deleted";
    }

    @PostMapping(value="/api/user", consumes = "application/json")
    @ResponseBody
    Users addUser(@RequestBody String jsonUser) throws JsonProcessingException {
        ObjectMapper om = new ObjectMapper();
        Users user=om.readValue(jsonUser,Users.class);
        return iUsersImpl.addUser(user);
    }


}