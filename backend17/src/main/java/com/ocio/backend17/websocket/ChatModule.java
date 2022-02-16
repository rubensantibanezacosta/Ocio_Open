package com.ocio.backend17.websocket;

import com.corundumstudio.socketio.HandshakeData;
import com.corundumstudio.socketio.SocketIONamespace;
import com.corundumstudio.socketio.SocketIOServer;
import com.corundumstudio.socketio.listener.ConnectListener;
import com.corundumstudio.socketio.listener.DataListener;
import com.corundumstudio.socketio.listener.DisconnectListener;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ocio.backend17.entities.Comments;


@Component
public class ChatModule {

    private static final Logger log = LoggerFactory.getLogger(ChatModule.class);

    private final SocketIONamespace namespace;

    @Autowired
    public ChatModule(SocketIOServer server) {
        this.namespace = server.addNamespace("/socket.io/");
        this.namespace.addConnectListener(onConnected());
        this.namespace.addDisconnectListener(onDisconnected());
        
    }



    public DataListener<String> emit(String chanel, Comments comment) {
        return (client, data, ackSender) -> {
            log.debug(chanel);
            ObjectMapper om = new ObjectMapper();
            namespace.getBroadcastOperations().sendEvent(chanel, om.writeValueAsString(comment));
        };
    }

    private ConnectListener onConnected() {
        System.out.print("Connected");
        return client -> {
           
            HandshakeData handshakeData = client.getHandshakeData();
            log.debug("Client[{}] - Connected to chat module through '{}'", client.getSessionId().toString(), handshakeData.getUrl());
        };
    }

    private DisconnectListener onDisconnected() {
        return client -> {
            log.debug("Client[{}] - Disconnected from chat module.", client.getSessionId().toString());
        };
    }

}