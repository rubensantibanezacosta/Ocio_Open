package com.ocio.backend17.services;

import com.ocio.backend17.dao.CommentsDao;
import com.ocio.backend17.entities.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;
@Service
public class ICommentsImpl implements IComments {
    @Autowired
    CommentsDao commentsDao;
    @Override
    public Comments addComment(Comments comment) {
        Comments setTimedComment=comment;
        setTimedComment.setDate((Timestamp)new Date());
        return commentsDao.save(comment);
    }

    @Override
    public List<Comments> findByEventId(Double event_id) {
        return null;
    }

    @Override
    public int deleteById(Double id) {
        return 0;
    }

    @Override
    public Optional<Comments> findbyId(Double id) {
        return commentsDao.findById(id);
    }
}
