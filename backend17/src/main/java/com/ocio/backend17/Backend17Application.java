package com.ocio.backend17;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.Configuration;

@SpringBootApplication
public class Backend17Application{


    private String host="localhost";

   
    private Integer port=4001;

    @Bean
    public SocketIOServer socketIOServer() {
        Configuration config = new Configuration();
        config.setHostname(host);
        config.setPort(port);
        config.setOrigin("http://localhost:4200");
        return new SocketIOServer(config);
    }

    public static void main(String[] args) {
        SpringApplication.run(Backend17Application.class, args);
    }

}
