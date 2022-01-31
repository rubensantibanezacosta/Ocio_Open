package com.ocio.backend17.services;

import com.ocio.backend17.dao.UsersDao;
import com.ocio.backend17.models.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IUsersImpl implements IUsers{
@Autowired
UsersDao usersDao;
    @Override
    public List<Users> getAll() {
        return (List<Users>) usersDao.findAll();
    }

    @Override
    public Optional<Users> getById(String id) {
        return usersDao.findById(id);
    }

    @Override
    public Users addUser(Users user) {
        return usersDao.save(user);
    }

    @Override
    public void deleteById(String id) {
        usersDao.deleteById(id);
    }
}
