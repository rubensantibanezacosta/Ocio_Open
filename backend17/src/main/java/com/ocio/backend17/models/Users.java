package com.ocio.backend17.models;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "users", schema = "ocio_open", catalog = "")
public class Users {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "email", nullable = false, length = 200)
    private String email;
    @Basic
    @Column(name = "name", nullable = false, length = 200)
    private String name;
    @Basic
    @Column(name = "surname", nullable = false, length = 400)
    private String surname;
    @Basic
    @Column(name = "image_url", nullable = false, length = 2000)
    private String imageUrl;
    @Basic
    @Column(name = "role", nullable = false, length = 50)
    private String role;
    @Basic
    @Column(name = "punctuation_avg", nullable = false, precision = 0)
    private double punctuationAvg;
    @Basic
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "lastconnection", nullable = true)
    private Timestamp lastconnection;
    @Basic
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "usersByAssistant")
    private Collection<PersistenceAssistants> assistantsByEmail;
    @OneToMany(mappedBy = "usersByAssistant")
    private Collection<PersistenceComments> commentsByEmail;
    @OneToMany(mappedBy = "usersByOrganizer")
    private Collection<PersistenceEvents> eventsByEmail;
    @OneToMany(mappedBy = "usersByAssistant")
    private Collection<PersistencePunctuations> punctuationsByEmail;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public double getPunctuationAvg() {
        return punctuationAvg;
    }

    public void setPunctuationAvg(double punctuationAvg) {
        this.punctuationAvg = punctuationAvg;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Timestamp getLastconnection() {
        return lastconnection;
    }

    public void setLastconnection(Timestamp lastconnection) {
        this.lastconnection = lastconnection;
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
        Users that = (Users) o;
        return Double.compare(that.punctuationAvg, punctuationAvg) == 0 && Objects.equals(email, that.email) && Objects.equals(name, that.name) && Objects.equals(surname, that.surname) && Objects.equals(imageUrl, that.imageUrl) && Objects.equals(role, that.role) && Objects.equals(createdAt, that.createdAt) && Objects.equals(lastconnection, that.lastconnection) && Objects.equals(updatedAt, that.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, name, surname, imageUrl, role, punctuationAvg, createdAt, lastconnection, updatedAt);
    }

    public Collection<PersistenceAssistants> getAssistantsByEmail() {
        return assistantsByEmail;
    }

    public void setAssistantsByEmail(Collection<PersistenceAssistants> assistantsByEmail) {
        this.assistantsByEmail = assistantsByEmail;
    }

    public Collection<PersistenceComments> getCommentsByEmail() {
        return commentsByEmail;
    }

    public void setCommentsByEmail(Collection<PersistenceComments> commentsByEmail) {
        this.commentsByEmail = commentsByEmail;
    }

    public Collection<PersistenceEvents> getEventsByEmail() {
        return eventsByEmail;
    }

    public void setEventsByEmail(Collection<PersistenceEvents> eventsByEmail) {
        this.eventsByEmail = eventsByEmail;
    }

    public Collection<PersistencePunctuations> getPunctuationsByEmail() {
        return punctuationsByEmail;
    }

    public void setPunctuationsByEmail(Collection<PersistencePunctuations> punctuationsByEmail) {
        this.punctuationsByEmail = punctuationsByEmail;
    }
}
