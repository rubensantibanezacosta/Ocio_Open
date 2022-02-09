package com.ocio.backend17.entities;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Events {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "eventid", nullable = false, precision = 0)
    private double event_id;
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
    private double punctuation_avg;
    @Basic
    @Column(name = "organizer", nullable = false, length = 200)
    private String organizer;
    @Basic
    @Column(name = "image_id", nullable = true)
    private Integer image_id;
    @Basic
    @Column(name = "createdat", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedat", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "events")
    private Collection<Assistants> assistants;
    @OneToMany(mappedBy = "events")
    private Collection<Comments> comments;
    @ManyToOne
    @JoinColumn(name = "organizer", referencedColumnName = "email", nullable = false, updatable = false, insertable = false)
    private Users usersByOrganizer;
    @ManyToOne
    @JoinColumn(name = "imageid", referencedColumnName = "id", updatable = false, insertable = false)
    private Images imagesByImageid;
    @OneToMany(mappedBy = "events")
    private Collection<Punctuations> punctuationsByEventid;

    public double getEvent_id() {
        return event_id;
    }

    public void setEvent_id(double eventid) {
        this.event_id = eventid;
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

    public double getPunctuation_avg() {
        return punctuation_avg;
    }

    public void setPunctuation_avg(double punctuationavg) {
        this.punctuation_avg = punctuationavg;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public Integer getImage_id() {
        return image_id;
    }

    public void setImage_id(Integer imageid) {
        this.image_id = imageid;
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
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Events events = (Events) o;
        return Double.compare(events.event_id, event_id) == 0
                && Double.compare(events.punctuation_avg, punctuation_avg) == 0 && Objects.equals(tittle, events.tittle)
                && Objects.equals(date, events.date) && Objects.equals(zone, events.zone)
                && Objects.equals(place, events.place) && Objects.equals(description, events.description)
                && Objects.equals(organizer, events.organizer) && Objects.equals(image_id, events.image_id)
                && Objects.equals(createdAt, events.createdAt) && Objects.equals(updatedAt, events.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(event_id, tittle, date, zone, place, description, punctuation_avg, organizer, image_id,
                createdAt, updatedAt);
    }

    public Collection<Assistants> getAssistantsByEventid() {
        return assistants;
    }

    public void setAssistantsByEventid(Collection<Assistants> assistantsByEventid) {
        this.assistants = assistantsByEventid;
    }

    public Collection<Comments> getCommentsByEventid() {
        return comments;
    }

    public void setCommentsByEventid(Collection<Comments> commentsByEventid) {
        this.comments = commentsByEventid;
    }

    public Users getUsersByOrganizer() {
        return usersByOrganizer;
    }

    public void setUsersByOrganizer(Users usersByOrganizer) {
        this.usersByOrganizer = usersByOrganizer;
    }

    public Images getImagesByImageid() {
        return imagesByImageid;
    }

    public void setImagesByImageid(Images imagesByImageid) {
        this.imagesByImageid = imagesByImageid;
    }

    public Collection<Punctuations> getPunctuationsByEventid() {
        return punctuationsByEventid;
    }

    public void setPunctuationsByEventid(Collection<Punctuations> punctuationsByEventid) {
        this.punctuationsByEventid = punctuationsByEventid;
    }
}
