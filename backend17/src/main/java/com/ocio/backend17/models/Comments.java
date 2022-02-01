package com.ocio.backend17.models;

import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Comments {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "comment_id", nullable = false, precision = 0)
    private double commentId;
    @Basic
    @Column(name = "event_id", nullable = false, precision = 0, updatable = false, insertable = false)
    private double eventId;
    @Basic
    @Column(name = "assistant", nullable = false, length = 200, updatable = false, insertable = false)
    private String assistant;
    @Basic
    @Column(name = "comment", nullable = false, length = 2000)
    private String comment;
    @CreatedDate
    @Column(name = "date", nullable = false)
    private Timestamp date;
    @ManyToOne
    @JoinColumn(name = "event_id", referencedColumnName = "event_id", nullable = false, updatable = false, insertable = false)
    private Events eventsByEventId;
    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false, updatable = false, insertable = false)
    private Users usersByAssistant;

    public double getCommentId() {
        return commentId;
    }

    public void setCommentId(double commentId) {
        this.commentId = commentId;
    }

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
        return Double.compare(comments.commentId, commentId) == 0 && Double.compare(comments.eventId, eventId) == 0 && Objects.equals(assistant, comments.assistant) && Objects.equals(comment, comments.comment) && Objects.equals(date, comments.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(commentId, eventId, assistant, comment, date);
    }

    public Events getEventsByEventId() {
        return eventsByEventId;
    }

    public void setEventsByEventId(Events eventsByEventId) {
        this.eventsByEventId = eventsByEventId;
    }

    public Users getUsersByAssistant() {
        return usersByAssistant;
    }

    public void setUsersByAssistant(Users usersByAssistant) {
        this.usersByAssistant = usersByAssistant;
    }
}
