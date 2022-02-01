package com.ocio.backend17.models;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Events {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "event_id", nullable = false, precision = 0, updatable = false, insertable = false)
    private double eventId;
    @Basic
    @Column(name = "tittle", nullable = false, length = 200)
    private String tittle;
    @Basic
    @Column(name = "date", nullable = false)
    private Timestamp date;
    @Basic
    @Column(name = "zone", nullable = false, length = 500)
    private String zone;
    @Basic
    @Column(name = "place", nullable = false, length = 500)
    private String place;
    @Basic
    @Column(name = "description", nullable = true, length = 4000)
    private String description;
    @Basic
    @Column(name = "punctuation_avg", nullable = false, precision = 0)
    private double punctuationAvg;
    @Basic
    @Column(name = "organizer", nullable = false, length = 200, updatable = false, insertable = false)
    private String organizer;
    @Basic
    @Column(name = "image_id", nullable = true, updatable = false, insertable = false)
    private Integer imageId;
    @CreatedDate
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @LastModifiedDate
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<Assistants> assistantsByEventId;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<Comments> commentsByEventId;
    @ManyToOne
    @JoinColumn(name = "organizer", referencedColumnName = "email", nullable = false, updatable = false, insertable = false)
    private Users usersByOrganizer;
    @ManyToOne
    @JoinColumn(name = "image_id", referencedColumnName = "id", updatable = false, insertable = false)
    private Images imagesByImageId;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<Punctuations> punctuationsByEventId;

    public double getEventId() {
        return eventId;
    }

    public void setEventId(double eventId) {
        this.eventId = eventId;
    }

    public String getTittle() {
        return tittle;
    }

    public void setTittle(String tittle) {
        this.tittle = tittle;
    }

    public Timestamp getDate() {
        return date;
    }

    public void setDate(Timestamp date) {
        this.date = date;
    }

    public String getZone() {
        return zone;
    }

    public void setZone(String zone) {
        this.zone = zone;
    }

    public String getPlace() {
        return place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPunctuationAvg() {
        return punctuationAvg;
    }

    public void setPunctuationAvg(double punctuationAvg) {
        this.punctuationAvg = punctuationAvg;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public Integer getImageId() {
        return imageId;
    }

    public void setImageId(Integer imageId) {
        this.imageId = imageId;
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
        Events events = (Events) o;
        return Double.compare(events.eventId, eventId) == 0 && Double.compare(events.punctuationAvg, punctuationAvg) == 0 && Objects.equals(tittle, events.tittle) && Objects.equals(date, events.date) && Objects.equals(zone, events.zone) && Objects.equals(place, events.place) && Objects.equals(description, events.description) && Objects.equals(organizer, events.organizer) && Objects.equals(imageId, events.imageId) && Objects.equals(createdAt, events.createdAt) && Objects.equals(updatedAt, events.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, tittle, date, zone, place, description, punctuationAvg, organizer, imageId, createdAt, updatedAt);
    }

    public Collection<Assistants> getAssistantsByEventId() {
        return assistantsByEventId;
    }

    public void setAssistantsByEventId(Collection<Assistants> assistantsByEventId) {
        this.assistantsByEventId = assistantsByEventId;
    }

    public Collection<Comments> getCommentsByEventId() {
        return commentsByEventId;
    }

    public void setCommentsByEventId(Collection<Comments> commentsByEventId) {
        this.commentsByEventId = commentsByEventId;
    }

    public Users getUsersByOrganizer() {
        return usersByOrganizer;
    }

    public void setUsersByOrganizer(Users usersByOrganizer) {
        this.usersByOrganizer = usersByOrganizer;
    }

    public Images getImagesByImageId() {
        return imagesByImageId;
    }

    public void setImagesByImageId(Images imagesByImageId) {
        this.imagesByImageId = imagesByImageId;
    }

    public Collection<Punctuations> getPunctuationsByEventId() {
        return punctuationsByEventId;
    }

    public void setPunctuationsByEventId(Collection<Punctuations> punctuationsByEventId) {
        this.punctuationsByEventId = punctuationsByEventId;
    }
}
