package com.ocio.backend17;



import com.corundumstudio.socketio.SocketIOServer;
import com.ocio.backend17.entities.Comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;



@Component
public class ServerCommandLineRunner implements CommandLineRunner {

    private final SocketIOServer server;
   

    @Autowired
    public ServerCommandLineRunner(SocketIOServer server) {
        this.server = server;
    }

    public void emitComment(String chanel, Comments comment){
        System.out.println("Sending "+comment.getComment()+ " through chanel "+ chanel);
        server.getBroadcastOperations().sendEvent(chanel, comment);
    }
    public void emitIndex(String chanel, int index){
        System.out.println("Sending "+index+ " through chanel "+ chanel);
        server.getBroadcastOperations().sendEvent(chanel, index);
    }


    @Override
    public void run(String... args) throws Exception {
      
        server.start();

        Thread.sleep(Integer.MAX_VALUE);

        server.stop();
    }
}