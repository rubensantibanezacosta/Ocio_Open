package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(AssistantsPK.class)
public class Assistants {
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
        Assistants that = (Assistants) o;
        return Double.compare(that.eventId, eventId) == 0 && attendance == that.attendance && Objects.equals(assistant, that.assistant) && Objects.equals(excuse, that.excuse) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, assistant, attendance, excuse, createdAt, updatedAt);
    }
}
