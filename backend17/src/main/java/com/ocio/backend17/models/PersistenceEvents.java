package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "events", schema = "ocio_open", catalog = "")
public class PersistenceEvents {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "event_id", nullable = false, precision = 0)
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
    @Column(name = "organizer", nullable = false, length = 200)
    private String organizer;
    @Basic
    @Column(name = "image_id", nullable = true)
    private Integer imageId;
    @Basic
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<PersistenceAssistants> assistantsByEventId;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<PersistenceComments> commentsByEventId;
    @ManyToOne
    @JoinColumn(name = "organizer", referencedColumnName = "email", nullable = false)
    private Users usersByOrganizer;
    @ManyToOne
    @JoinColumn(name = "image_id", referencedColumnName = "id")
    private PersistenceImages imagesByImageId;
    @OneToMany(mappedBy = "eventsByEventId")
    private Collection<PersistencePunctuations> punctuationsByEventId;

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
        PersistenceEvents that = (PersistenceEvents) o;
        return Double.compare(that.eventId, eventId) == 0 && Double.compare(that.punctuationAvg, punctuationAvg) == 0 && Objects.equals(tittle, that.tittle) && Objects.equals(date, that.date) && Objects.equals(zone, that.zone) && Objects.equals(place, that.place) && Objects.equals(description, that.description) && Objects.equals(organizer, that.organizer) && Objects.equals(imageId, that.imageId) && Objects.equals(createdAt, that.createdAt) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventId, tittle, date, zone, place, description, punctuationAvg, organizer, imageId, createdAt, updatedAt);
    }

    public Collection<PersistenceAssistants> getAssistantsByEventId() {
        return assistantsByEventId;
    }

    public void setAssistantsByEventId(Collection<PersistenceAssistants> assistantsByEventId) {
        this.assistantsByEventId = assistantsByEventId;
    }

    public Collection<PersistenceComments> getCommentsByEventId() {
        return commentsByEventId;
    }

    public void setCommentsByEventId(Collection<PersistenceComments> commentsByEventId) {
        this.commentsByEventId = commentsByEventId;
    }

    public Users getUsersByOrganizer() {
        return usersByOrganizer;
    }

    public void setUsersByOrganizer(Users usersByOrganizer) {
        this.usersByOrganizer = usersByOrganizer;
    }

    public PersistenceImages getImagesByImageId() {
        return imagesByImageId;
    }

    public void setImagesByImageId(PersistenceImages imagesByImageId) {
        this.imagesByImageId = imagesByImageId;
    }

    public Collection<PersistencePunctuations> getPunctuationsByEventId() {
        return punctuationsByEventId;
    }

    public void setPunctuationsByEventId(Collection<PersistencePunctuations> punctuationsByEventId) {
        this.punctuationsByEventId = punctuationsByEventId;
    }
}
