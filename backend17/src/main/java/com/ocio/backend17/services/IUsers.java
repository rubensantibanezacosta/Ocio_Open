package com.ocio.backend17.services;
import com.ocio.backend17.models.Users;

import java.util.List;
import java.util.Optional;

public interface IUsers {
    List<Users> getAll();
    Optional<Users> getById(String id);
    Users addUser(Users user);
    void deleteById(String id);

}
