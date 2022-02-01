package com.ocio.backend17.models;

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
    private double eventid;
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
    @Column(name = "punctuationavg", nullable = false, precision = 0)
    private double punctuationavg;
    @Basic
    @Column(name = "organizer", nullable = false, length = 200, insertable=false, updatable=false)
    private String organizer;
    @Basic
    @Column(name = "imageid", nullable = true, insertable=false, updatable=false)
    private Integer imageid;
    @Basic
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "eventsByEventid")
    private Collection<Assistants> assistantsByEventid;
    @OneToMany(mappedBy = "eventsByEventid")
    private Collection<Comments> commentsByEventid;
    @ManyToOne
    @JoinColumn(name = "organizer", referencedColumnName = "email", nullable = false)
    private Users usersByOrganizer;
    @ManyToOne
    @JoinColumn(name = "imageid", referencedColumnName = "id")
    private Images imagesByImageid;
    @OneToMany(mappedBy = "eventsByEventid")
    private Collection<Punctuations> punctuationsByEventid;

    public double getEventid() {
        return eventid;
    }

    public void setEventid(double eventid) {
        this.eventid = eventid;
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

    public double getPunctuationavg() {
        return punctuationavg;
    }

    public void setPunctuationavg(double punctuationavg) {
        this.punctuationavg = punctuationavg;
    }

    public String getOrganizer() {
        return organizer;
    }

    public void setOrganizer(String organizer) {
        this.organizer = organizer;
    }

    public Integer getImageid() {
        return imageid;
    }

    public void setImageid(Integer imageid) {
        this.imageid = imageid;
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
        return Double.compare(events.eventid, eventid) == 0 && Double.compare(events.punctuationavg, punctuationavg) == 0 && Objects.equals(tittle, events.tittle) && Objects.equals(date, events.date) && Objects.equals(zone, events.zone) && Objects.equals(place, events.place) && Objects.equals(description, events.description) && Objects.equals(organizer, events.organizer) && Objects.equals(imageid, events.imageid) && Objects.equals(createdAt, events.createdAt) && Objects.equals(updatedAt, events.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventid, tittle, date, zone, place, description, punctuationavg, organizer, imageid, createdAt, updatedAt);
    }

    public Collection<Assistants> getAssistantsByEventid() {
        return assistantsByEventid;
    }

    public void setAssistantsByEventid(Collection<Assistants> assistantsByEventid) {
        this.assistantsByEventid = assistantsByEventid;
    }

    public Collection<Comments> getCommentsByEventid() {
        return commentsByEventid;
    }

    public void setCommentsByEventid(Collection<Comments> commentsByEventid) {
        this.commentsByEventid = commentsByEventid;
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
