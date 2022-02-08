package com.ocio.backend17.services;

import com.ocio.backend17.dao.UsersDao;
import com.ocio.backend17.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    public Users createOrUpdate(Users user) {
        DateFormat dateFormatterDate=new SimpleDateFormat("yyyy-MM-dd");
        DateFormat dateFormatterDateTime=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        if(usersDao.findById(user.getEmail()).isPresent()){

            Users updatedUser= usersDao.findById(user.getEmail()).get();
            System.out.println(updatedUser);
            updatedUser.setName(user.getName());
            updatedUser.setSurname(user.getSurname());
            updatedUser.setUpdatedAt(java.sql.Date.valueOf(dateFormatterDate.format(new Date())));
            return usersDao.save(updatedUser);
        }else{
            Users createdUser=user;
            createdUser.setLastconnection(java.sql.Timestamp.valueOf(dateFormatterDateTime.format(new Date())));
            createdUser.setCreatedAt(java.sql.Date.valueOf(dateFormatterDate.format(new Date())));
            createdUser.setUpdatedAt(java.sql.Date.valueOf(dateFormatterDate.format(new Date())));
            return usersDao.save(createdUser);
        }

    }

    @Override
    public void deleteById(String id) {
        usersDao.deleteById(id);
    }

    @Override
    public int getUserPosition(String email) {
        if(usersDao.findById(email).isPresent()) {
            Users user = usersDao.findById(email).get();
            List<Users> orderedUsers = usersDao.findUsersOrderByPunctuacion();
            return orderedUsers.indexOf(user)+1;
        }else{
            return 0;
        }
    }
}
