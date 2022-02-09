package com.ocio.backend17.entities;

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
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false, updatable = false, insertable = false)
    private Users user;

    public double getComment_id() {
        return comment_id;
    }

    public void setComment_id(double commentid) {
        this.comment_id = commentid;
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
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Comments comments = (Comments) o;
        return Double.compare(comments.comment_id, comment_id) == 0 && Double.compare(comments.event_id, event_id) == 0
                && Objects.equals(assistant, comments.assistant) && Objects.equals(comment, comments.comment)
                && Objects.equals(date, comments.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(comment_id, event_id, assistant, comment, date);
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
