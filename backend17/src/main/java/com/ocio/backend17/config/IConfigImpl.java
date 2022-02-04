package com.ocio.backend17.config;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class IConfigImpl implements IConfig{
    @Autowired Config config;


    @Override
    public String getJwtSecret() {
        return config.getJwtSecret();
    }

    @Override
    public String getUserRoleKey() {
        return config.getUserrolekey();
    }
}
