package com.ocio.backend17.dao;

import com.ocio.backend17.entities.Assistants;
import com.ocio.backend17.entities.AssistantsPK;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AssistantDao extends CrudRepository<Assistants, AssistantsPK> {
    List<Assistants> findByEventidAndAttendance(Double event_id, Boolean attendee);
}
