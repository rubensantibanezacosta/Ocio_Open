package com.ocio.backend17.entities;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(AssistantsPK.class)
public class Assistants {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "event_id", nullable = false, precision = 0)
    private double event_id;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "assistant", nullable = false, length = 200)
    private String assistant;
    @Basic
    @Column(name = "attendance", nullable = false)
    private Boolean attendance;
    @Basic
    @Column(name = "excuse", nullable = true, length = 2000)
    private String excuse;
    @Basic
    @Column(name = "createdat", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedat", nullable = false)
    private Date updatedAt;

    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false, updatable = false, insertable = false)
    private Users user;

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

    public Boolean getAttendance() {
        return attendance;
    }

    public void setAttendance(Boolean attendance) {
        this.attendance = attendance;
    }

    public String getExcuse() {
        return excuse;
    }

    public void setExcuse(String excuse) {
        this.excuse = excuse;
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
        Assistants that = (Assistants) o;
        return Double.compare(that.event_id, event_id) == 0 && attendance == that.attendance && Objects.equals(assistant, that.assistant) && Objects.equals(excuse, that.excuse) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(event_id, assistant, attendance, excuse, createdAt, updatedAt);
    }

    public Users getUsersByAssistant() {
        return user;
    }

    public void setUsersByAssistant(Users usersByAssistant) {
        this.user = usersByAssistant;
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