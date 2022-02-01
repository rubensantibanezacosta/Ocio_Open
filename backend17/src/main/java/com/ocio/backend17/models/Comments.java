package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;

@Entity
public class Comments {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "commentid", nullable = false, precision = 0)
    private double commentid;
    @Basic
    @Column(name = "eventid", nullable = false, precision = 0, insertable=false, updatable=false)
    private double eventid;
    @Basic
    @Column(name = "assistant", nullable = false, length = 200, insertable=false, updatable=false)
    private String assistant;
    @Basic
    @Column(name = "comment", nullable = false, length = 2000)
    private String comment;
    @Basic
    @Column(name = "date", nullable = false)
    private Timestamp date;
    @ManyToOne
    @JoinColumn(name = "eventid", referencedColumnName = "eventid", nullable = false)
    private Events eventsByEventid;
    @ManyToOne
    @JoinColumn(name = "assistant", referencedColumnName = "email", nullable = false)
    private Users usersByAssistant;

    public double getCommentid() {
        return commentid;
    }

    public void setCommentid(double commentid) {
        this.commentid = commentid;
    }

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
        return Double.compare(comments.commentid, commentid) == 0 && Double.compare(comments.eventid, eventid) == 0 && Objects.equals(assistant, comments.assistant) && Objects.equals(comment, comments.comment) && Objects.equals(date, comments.date);
    }

    @Override
    public int hashCode() {
        return Objects.hash(commentid, eventid, assistant, comment, date);
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
