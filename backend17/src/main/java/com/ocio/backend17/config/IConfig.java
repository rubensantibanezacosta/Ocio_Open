package com.ocio.backend17.config;

public interface IConfig {
    String getJwtSecret();
    String getUserRoleKey();
    int getExpirationTime();
    String acceptedDomains();
    String googleApiUrl();
}
