package com.ocio.backend17.security.google;

import com.ocio.backend17.config.IConfigImpl;
import org.springframework.beans.factory.annotation.Autowired;

public class GoogleRequestDto {
    @Autowired
    IConfigImpl iConfig;

    String url;
    String token;

    public GoogleRequestDto(String token) {
        this.url =iConfig.googleApiUrl();
        this.token = token;
    }

    public String getRequestCompleteUrl() {
        return url+token;
    }


}
