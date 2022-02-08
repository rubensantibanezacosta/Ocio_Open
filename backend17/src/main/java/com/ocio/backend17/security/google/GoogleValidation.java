package com.ocio.backend17.security.google;


import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;

import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;


import java.io.IOException;


@Component
public class GoogleValidation {
    private Logger logger = LoggerFactory.getLogger(GoogleValidation.class);

    CloseableHttpClient httpClient = HttpClients.createDefault();



    public GoogleResponseDto validateToken(GoogleRequestDto googleRequestDto) throws IOException {

        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpGet httpGet = new HttpGet(googleRequestDto.getRequestCompleteUrl());
        CloseableHttpResponse response = httpClient.execute(httpGet);

        if (response.getStatusLine().getStatusCode() == 200) {
            System.out.println(response.getEntity().getContentType());
            response.close();
            httpClient.close();
            String str = EntityUtils.toString(response.getEntity(), "UTF-8");
            ObjectMapper om = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            GoogleResponseDto googleResponseDto = om.readValue(str, GoogleResponseDto.class);
            return googleResponseDto;

        }
        return null;
    }
}
