package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(PunctuationsPK.class)
public class Punctuations {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "eventid", nullable = false, precision = 0,  insertable=false, updatable=false)
    private double eventid;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "assistant", nullable = false, length = 200,insertable=false, updatable=false)
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
    @JoinColumn(name = "eventid", referencedColumnName = "eventid", nullable = false, insertable=false, updatable=false)
    private Events eventsByEventid;
    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false, insertable=false, updatable=false)
    private Users usersByAssistant;

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
        return Double.compare(that.eventid, eventid) == 0 && Double.compare(that.punctuation, punctuation) == 0 && Objects.equals(assistant, that.assistant) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventid, assistant, punctuation, createdAt, updatedAt);
    }

    public Events getEventsByEventid() {
        return eventsByEventid;
    }

    public void setEventsByEventid(Events eventsByEventid) {
        this.eventsByEventid = eventsByEventid;
    }

    public Users getUsersByAssistant() {
        return usersByAssistant;
    }

    public void setUsersByAssistant(Users usersByAssistant) {
        this.usersByAssistant = usersByAssistant;
    }
}
