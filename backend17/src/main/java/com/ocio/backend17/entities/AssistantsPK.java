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
    private double event_id;
    @Column(name = "assistant", nullable = false, length = 200)
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String assistant;

    public AssistantsPK() {
    }

    public AssistantsPK(double event_id, String assistant) {
        this.event_id = event_id;
        this.assistant = assistant;
    }

    public double getEvent_id() {
        return event_id;
    }

    public void setEvent_id(double eventid) {
        this.event_id = eventid;
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
        return Double.compare(that.event_id, event_id) == 0 && Objects.equals(assistant, that.assistant);
    }

    @Override
    public int hashCode() {
        return Objects.hash(event_id, assistant);
    }
}
