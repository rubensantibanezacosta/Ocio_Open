package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@Table(name = "assistants", schema = "ocio_open", catalog = "")
@IdClass(PersistenceAssistantsPK.class)
public class PersistenceAssistants {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "event_id", nullable = false, precision = 0)
    private double eventId;
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "assistant", nullable = false, length = 200)
    private String assistant;
    @Basic
    @Column(name = "attendance", nullable = false)
    private byte attendance;
    @Basic
    @Column(name = "excuse", nullable = true, length = 2000)
    private String excuse;
    @Basic
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id", nullable = false)
    private PersistenceEvents eventsByEventId;
    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false)
    private Users usersByAssistant;

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

    public byte getAttendance() {
        return attendance;
    }

    public void setAttendance(byte attendance) {
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
        PersistenceAssistants that = (PersistenceAssistants) o;
        return Double.compare(that.eventId, eventId) == 0 && attendance == that.attendance && Objects.equals(assistant, that.assistant) && Objects.equals(excuse, that.excuse) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, assistant, attendance, excuse, createdAt, updatedAt);
    }

    public PersistenceEvents getEventsByEventId() {
        return eventsByEventId;
    }

    public void setEventsByEventId(PersistenceEvents eventsByEventId) {
        this.eventsByEventId = eventsByEventId;
    }

    public Users getUsersByAssistant() {
        return usersByAssistant;
    }

    public void setUsersByAssistant(Users usersByAssistant) {
        this.usersByAssistant = usersByAssistant;
    }
}
