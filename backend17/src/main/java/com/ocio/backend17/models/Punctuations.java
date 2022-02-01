package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(PunctuationsPK.class)
public class Punctuations {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "event_id", nullable = false, precision = 0)
    private double eventId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "assistant", nullable = false, length = 200)
    private String assistant;
    @Basic
    @Column(name = "punctuation", nullable = false, precision = 0)
    private double punctuation;
    @Basic
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id", nullable = false)
    private Events eventsByEventId;

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
        return Double.compare(that.eventId, eventId) == 0 && Double.compare(that.punctuation, punctuation) == 0 && Objects.equals(assistant, that.assistant) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, assistant, punctuation, createdAt, updatedAt);
    }

    public Events getEventsByEventId() {
        return eventsByEventId;
    }

    public void setEventsByEventId(Events eventsByEventId) {
        this.eventsByEventId = eventsByEventId;
    }
}
