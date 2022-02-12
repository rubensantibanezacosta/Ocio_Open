package com.ocio.backend17.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Comments {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "comment_id", nullable = false, precision = 0)
    private double comment_id;
    @Basic
    @Column(name = "event_id", nullable = false, precision = 0)
    private double event_id;
    @Basic
    @Column(name = "assistant", nullable = false, length = 200)
    private String assistant;
    @Basic
    @Column(name = "comment", nullable = false, length = 2000)
    private String comment;
    @Basic
    @Column(name = "date", nullable = false)
    private Timestamp date;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "event_id", referencedColumnName = "event_id", nullable = false, updatable = false, insertable = false)
    private Events eventsByEventId;
    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false, updatable = false, insertable = false)
    private Users users;

    public double getComment_id() {
        return comment_id;
    }

    public void setComment_id(double commentId) {
        this.comment_id = commentId;
    }

    public double getEvent_id() {
        return event_id;
    }

    public void setEvent_id(double eventId) {
        this.event_id = eventId;
    }

    public String getAssistant() {
        return assistant;
    }

    public void setAssistant(String assistant) {
        this.assistant = assistant;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comments comments = (Comments) o;
        return Double.compare(comments.comment_id, comment_id) == 0 && Double.compare(comments.event_id, event_id) == 0 && Objects.equals(assistant, comments.assistant) && Objects.equals(comment, comments.comment) && Objects.equals(date, comments.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(comment_id, event_id, assistant, comment, date);
    }

    public Events getEventsByEventId() {
        return eventsByEventId;
    }

    public void setEventsByEventId(Events eventsByEventId) {
        this.eventsByEventId = eventsByEventId;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users usersByAssistant) {
        this.users = usersByAssistant;
    }
}
