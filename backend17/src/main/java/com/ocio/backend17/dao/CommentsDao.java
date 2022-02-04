package com.ocio.backend17.dao;

import com.ocio.backend17.entities.Comments;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentsDao extends CrudRepository<Comments, Double> {
    List<Comments> findByEventid(Double event_id);
}
