package com.ocio.backend17.entities;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(PunctuationsPK.class)
public class Punctuations {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "eventid", nullable = false, precision = 0, updatable = false, insertable = false)
    private double event_id;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "assistant", nullable = false, length = 200, updatable = false, insertable = false)
    private String assistant;
    @Basic
    @Column(name = "punctuation", nullable = false, precision = 0)
    private double punctuation;
    @Basic
    @Column(name = "createdat", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedat", nullable = false)
    private Date updatedAt;


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

    public double getPunctuation() {
        return punctuation;
    }

    public void setPunctuation(double punctuation) {
        this.punctuation = punctuation;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Punctuations that = (Punctuations) o;
        return Double.compare(that.event_id, event_id) == 0 && Double.compare(that.punctuation, punctuation) == 0 && Objects.equals(assistant, that.assistant) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(event_id, assistant, punctuation, createdAt, updatedAt);

    }

    @ManyToOne(optional = false)
    private Events events;

    public Events getEvents() {
        return events;
    }

    public void setEvents(Events events) {
        this.events = events;
    }
}

