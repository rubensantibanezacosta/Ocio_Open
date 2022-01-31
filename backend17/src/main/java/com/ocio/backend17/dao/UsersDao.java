package com.ocio.backend17.dao;

import com.ocio.backend17.models.Users;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersDao extends CrudRepository<Users, String> {

}
