package com.ocio.backend17.security;

import com.ocio.backend17.dto.BasicAuthRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class ExtractHeaderData {

    public BasicAuthRequest extractBasicAuthCredentials(HttpHeaders headers){
        try {
            String headerAuthDataEncoded = headers.getValuesAsList("Authorization").get(0).toString().substring(6);
            String[] decodedData = new String(Base64.getDecoder().decode(headerAuthDataEncoded)).split(":");
            return new BasicAuthRequest(decodedData[0], decodedData[1]);
        }catch (Exception e){
            return null;
        }
    }
}
