package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
@Table(name = "comments", schema = "ocio_open", catalog = "")
public class PersistenceComments {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "comment_id", nullable = false, precision = 0)
    private double commentId;
    @Basic
    @Column(name = "event_id", nullable = false, precision = 0)
    private double eventId;
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
    @JoinColumn(name = "event_id", referencedColumnName = "event_id", nullable = false)
    private PersistenceEvents eventsByEventId;
    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false)
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
        PersistenceComments that = (PersistenceComments) o;
        return Double.compare(that.commentId, commentId) == 0 && Double.compare(that.eventId, eventId) == 0 && Objects.equals(assistant, that.assistant) && Objects.equals(comment, that.comment) && Objects.equals(date, that.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(commentId, eventId, assistant, comment, date);
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
