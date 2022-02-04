package com.ocio.backend17.entities;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class AssistantsPK implements Serializable {
    @Column(name = "eventid", nullable = false, precision = 0)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private double eventid;
    @Column(name = "assistant", nullable = false, length = 200)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String assistant;

    public AssistantsPK() {
    }

    public AssistantsPK(double eventid, String assistant) {
        this.eventid = eventid;
        this.assistant = assistant;
    }

    public double getEventid() {
        return eventid;
    }

    public void setEventid(double eventid) {
        this.eventid = eventid;
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
        AssistantsPK that = (AssistantsPK) o;
        return Double.compare(that.eventid, eventid) == 0 && Objects.equals(assistant, that.assistant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventid, assistant);
    }
}
