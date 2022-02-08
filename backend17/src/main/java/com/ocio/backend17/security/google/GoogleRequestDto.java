package com.ocio.backend17.security.google;

import com.ocio.backend17.config.IConfigImpl;
import org.springframework.beans.factory.annotation.Autowired;

public class GoogleRequestDto {


    String url;
    String token;


    public GoogleRequestDto(String url, String token) {
        this.url = url;
        this.token = token;
    }

    public String getRequestCompleteUrl() {
        return url+token;
    }


}
