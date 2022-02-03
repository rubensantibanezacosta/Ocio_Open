package com.ocio.backend17.models;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Collection;
import java.util.Objects;

@Entity
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
    @CreatedDate
    @Column(name = "createdAt", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "lastconnection", nullable = true)
    private Timestamp lastconnection;
    @LastModifiedDate
    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;
    @OneToMany(mappedBy = "usersByAssistant")
    private Collection<Assistants> assistantsByEmail;
    @OneToMany(mappedBy = "usersByAssistant")
    private Collection<Comments> commentsByEmail;
    @OneToMany(mappedBy = "usersByOrganizer")
    private Collection<Events> eventsByEmail;
    @OneToMany(mappedBy = "usersByAssistant")
    private Collection<Punctuations> punctuationsByEmail;

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
        Users users = (Users) o;
        return Double.compare(users.punctuationAvg, punctuationAvg) == 0 && Objects.equals(email, users.email) && Objects.equals(name, users.name) && Objects.equals(surname, users.surname) && Objects.equals(imageUrl, users.imageUrl) && Objects.equals(role, users.role) && Objects.equals(createdAt, users.createdAt) && Objects.equals(lastconnection, users.lastconnection) && Objects.equals(updatedAt, users.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, name, surname, imageUrl, role, punctuationAvg, createdAt, lastconnection, updatedAt);
    }

    public Collection<Assistants> getAssistantsByEmail() {
        return assistantsByEmail;
    }

    public void setAssistantsByEmail(Collection<Assistants> assistantsByEmail) {
        this.assistantsByEmail = assistantsByEmail;
    }

    public Collection<Comments> getCommentsByEmail() {
        return commentsByEmail;
    }

    public void setCommentsByEmail(Collection<Comments> commentsByEmail) {
        this.commentsByEmail = commentsByEmail;
    }

    public Collection<Events> getEventsByEmail() {
        return eventsByEmail;
    }

    public void setEventsByEmail(Collection<Events> eventsByEmail) {
        this.eventsByEmail = eventsByEmail;
    }

    public Collection<Punctuations> getPunctuationsByEmail() {
        return punctuationsByEmail;
    }

    public void setPunctuationsByEmail(Collection<Punctuations> punctuationsByEmail) {
        this.punctuationsByEmail = punctuationsByEmail;
    }
}