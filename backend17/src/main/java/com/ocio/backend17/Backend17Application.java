package com.ocio.backend17;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;



import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.ocio.backend17.entities.Comments;
import com.corundumstudio.socketio.AckRequest;
import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOClient;
import com.corundumstudio.socketio.SocketIONamespace;

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
        SocketIOServer server= new SocketIOServer(config);

        
        Logger log = LoggerFactory.getLogger(SocketIOServer.class);
        server.addConnectListener(new ConnectListener() {

            @Override
            public void onConnect(SocketIOClient client) {
                log.debug(client.getHandshakeData().getUrl() + " Connected");
                System.out.println(client.getHandshakeData().getUrl() + " Connected");
            }
        });

        server.addDisconnectListener(new DisconnectListener() {

            @Override
            public void onDisconnect(SocketIOClient client) {
                log.debug(client.getHandshakeData().getUrl() + " Disconnected");
                System.out.println(client.getHandshakeData().getUrl() + " Disconnected");
            }
        });

     /*    server.addEventListener("comments", JSONPObject.class, new DataListener<JSONPObject>() {
            @Override
            public void onData(SocketIOClient client, JSONPObject data, AckRequest ackRequest) {
                log.debug(client.getHandshakeData() + " Connected");
            }
        }); */
    
        return server;
    }
 

    public static void main(String[] args) {
        SpringApplication.run(Backend17Application.class, args);
    }

}
