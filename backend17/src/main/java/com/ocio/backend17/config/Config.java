package com.ocio.backend17.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Configuration
@Component
public class Config {
    @Value("${value.userrolekey}")
    private String userrolekey;
    @Value("${value.jwtsecret")
    private String jwtSecret;

    public Config() {
    }

    public String getUserrolekey() {
        return userrolekey;
    }

    public void setUserrolekey(String userrolekey) {
        this.userrolekey = userrolekey;
    }

    public String getJwtSecret() {
        return jwtSecret;
    }

    public void setJwtSecret(String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }
}