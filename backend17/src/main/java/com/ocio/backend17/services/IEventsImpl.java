package com.ocio.backend17.services;

import com.ocio.backend17.dao.EventsDao;
import com.ocio.backend17.entities.Events;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class IEventsImpl implements IEvents {
    @Autowired
    EventsDao eventsDao;

    @Override
    public Events createEvent(Events event) {
        return eventsDao.save(event);
    }

    @Override
    public List<Events> findAllEventsDesc() {
        return eventsDao.findAllOrderDesc();
    }

    @Override
    public List<Events> findAllEventsAsc() {
        return eventsDao.findAllOrderAsc();
    }

    @Override
    public List<Events> findAllByDate(Date date) {
        return eventsDao.findAllByDate(date);
    }

    @Override
    public List<Events> findEventsByOrganizerAsc(String organizer) {
        return eventsDao.findAllByOrganizerOrderByDateAsc(organizer);
    }

    @Override
    public List<Events> findEventsByOrganizerDesc(String organizer) {
        return eventsDao.findAllByOrganizerOrderByDateDesc(organizer);
    }

    @Override
    public Optional<Events> findEventById(double event_id) {
        return eventsDao.findById(event_id);
    }

    @Transactional
    @Override
    public int updateEvent(Events event) {
        DateFormat dateFormatterDate = new SimpleDateFormat("yyyy-MM-dd");
        if (eventsDao.findById(event.getEvent_id()).isPresent()) {
            Events oldEvent = eventsDao.findById(event.getEvent_id()).get();
            oldEvent.setDate(event.getDate());
            oldEvent.setDescription(event.getDescription());
            oldEvent.setImage_id(event.getImage_id());
            oldEvent.setDate(event.getDate());
            oldEvent.setTittle(event.getTittle());
            oldEvent.setPlace(event.getPlace());
            oldEvent.setZone(event.getZone());
            oldEvent.setUpdatedAt((java.sql.Date.valueOf(dateFormatterDate.format(new Date()))));
            eventsDao.save(oldEvent);
            return 1;

        }
        return 0;
    }

    @Transactional
    @Override
    public int updateEventPunctuationAvg(double event_id, double punctuation_avg) {
        if (eventsDao.findById(event_id).isPresent()) {
            Events event = eventsDao.findById(event_id).get();
            event.setPunctuation_avg(punctuation_avg);
            return 1;
        }
        return 0;
    }

    @Transactional
    @Override
    public int deleteEvent(Double event_id) {
        if (eventsDao.findById(event_id).isPresent()) {
            eventsDao.deleteById(event_id);
            return 1;
        }
        return 0;
    }

}
