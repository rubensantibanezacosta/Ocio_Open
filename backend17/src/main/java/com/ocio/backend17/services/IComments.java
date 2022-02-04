package com.ocio.backend17.services;

import com.ocio.backend17.entities.Comments;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface IComments {
    Comments addComment(Comments comment);
    List<Comments> findByEventId(Double event_id);
    int deleteById(Double id);
    Optional<Comments> findbyId(Double id);
}
