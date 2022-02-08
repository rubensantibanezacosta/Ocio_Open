package com.ocio.backend17.entities;

import javax.persistence.*;




import java.sql.Date;
import java.sql.Timestamp;
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
    private String image_url;
    @Basic
    @Column(name = "role", nullable = false, length = 50)
    private String role;
    @Basic
    @Column(name = "punctuation_avg", nullable = false, precision = 0)
    private double punctuation_avg;
    @Basic
    @Column(name = "createdat", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "lastconnection", nullable = true)
    private Timestamp lastconnection;
    @Basic
    @Column(name = "updatedat", nullable = false)
    private Date updatedAt;
//    @OneToMany(mappedBy = "usersByAssistant")
//    private Collection<Assistants> assistantsByEmail;
//    @OneToMany(mappedBy = "usersByAssistant")
//    private Collection<Comments> commentsByEmail;
//    @OneToMany(mappedBy = "usersByOrganizer")
//    private Collection<Events> eventsByEmail;
//    @OneToMany(mappedBy = "usersByAssistant")
//    private Collection<Punctuations> punctuationsByEmail;

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

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String imageurl) {
        this.image_url = imageurl;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public double getPunctuation_avg() {
        return punctuation_avg;
    }

    public void setPunctuation_avg(double punctuationavg) {
        this.punctuation_avg = punctuationavg;
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
        return Double.compare(users.punctuation_avg, punctuation_avg) == 0 && Objects.equals(email, users.email) && Objects.equals(name, users.name) && Objects.equals(surname, users.surname) && Objects.equals(image_url, users.image_url) && Objects.equals(role, users.role) && Objects.equals(createdAt, users.createdAt) && Objects.equals(lastconnection, users.lastconnection) && Objects.equals(updatedAt, users.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, name, surname, image_url, role, punctuation_avg, createdAt, lastconnection, updatedAt);
    }

    @Override
    public String toString() {
        return "Users{" +
                "email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", image_url='" + image_url + '\'' +
                ", role='" + role + '\'' +
                ", punctuation_avg=" + punctuation_avg +
                ", createdAt=" + createdAt +
                ", lastconnection=" + lastconnection +
                ", updatedAt=" + updatedAt +
                '}';
    }
    //    public Collection<Assistants> getAssistantsByEmail() {
//        return assistantsByEmail;
//    }
//
//    public void setAssistantsByEmail(Collection<Assistants> assistantsByEmail) {
//        this.assistantsByEmail = assistantsByEmail;
//    }
//
//    public Collection<Comments> getCommentsByEmail() {
//        return commentsByEmail;
//    }
//
//    public void setCommentsByEmail(Collection<Comments> commentsByEmail) {
//        this.commentsByEmail = commentsByEmail;
//    }
//
//    public Collection<Events> getEventsByEmail() {
//        return eventsByEmail;
//    }
//
//    public void setEventsByEmail(Collection<Events> eventsByEmail) {
//        this.eventsByEmail = eventsByEmail;
//    }
//
//    public Collection<Punctuations> getPunctuationsByEmail() {
//        return punctuationsByEmail;
//    }
//
//    public void setPunctuationsByEmail(Collection<Punctuations> punctuationsByEmail) {
//        this.punctuationsByEmail = punctuationsByEmail;
//    }
}
