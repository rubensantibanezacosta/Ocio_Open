package com.ocio.backend17.dao;

import com.ocio.backend17.entities.Events;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;
import java.util.List;

public interface EventsDao extends CrudRepository<Events, Double> {
    @Query("Select u from Events u order by u.date desc")
    List<Events> findAllOrderDesc();
    @Query("Select u from Events u order by u.date asc")
    List<Events> findAllOrderAsc();
    List<Events> findAllByDate(Date date);
    List<Events> findAllByOrganizerOrderByDateAsc(String organizer);
    List<Events> findAllByOrganizerOrderByDateDesc(String organizer);


}
