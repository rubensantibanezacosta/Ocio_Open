package com.ocio.backend17.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {
    @Value("${value.name}")
    private String name;



@Bean
public IConfig function(){
    return new IConfigImpl(name);
}
}