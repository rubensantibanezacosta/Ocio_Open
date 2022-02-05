package com.ocio.backend17.dto;

public class BasicAuthResponse {
    private String jwt;

    public BasicAuthResponse(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
