package com.ocio.backend17.dto;

import com.ocio.backend17.entities.Users;

import java.sql.Date;
import java.sql.Timestamp;

public class UsersDto {
    private String email;
    private String name;
    private String surname;
    private String imageurl;
    private Timestamp lastconnection;
    private Date createdAt;
    private Double punctuationavg;

    public UsersDto(Users user) {
        this.email = user.getEmail();
        this.name = user.getName();
        this.surname = user.getSurname();
        this.imageurl = user.getImageUrl();
        this.lastconnection = user.getLastconnection();
        this.createdAt = user.getCreatedAt();
        this.punctuationavg = user.getPunctuation_avg();
    }

    public UsersDto() {
    }

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

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }

    public Timestamp getLastconnection() {
        return lastconnection;
    }

    public void setLastconnection(Timestamp lastconnection) {
        this.lastconnection = lastconnection;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Double getPunctuationavg() {
        return punctuationavg;
    }

    public void setPunctuationavg(Double punctuationavg) {
        this.punctuationavg = punctuationavg;
    }
}
