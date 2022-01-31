package com.ocio.backend17.models;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class PersistenceAssistantsPK implements Serializable {
    @Column(name = "event_id", nullable = false, precision = 0)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private double eventId;
    @Column(name = "assistant", nullable = false, length = 200)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String assistant;

    public double getEventId() {
        return eventId;
    }

    public void setEventId(double eventId) {
        this.eventId = eventId;
    }

    public String getAssistant() {
        return assistant;
    }

    public void setAssistant(String assistant) {
        this.assistant = assistant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PersistenceAssistantsPK that = (PersistenceAssistantsPK) o;
        return Double.compare(that.eventId, eventId) == 0 && Objects.equals(assistant, that.assistant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, assistant);
    }
}
