package com.ocio.backend17.websocket;

import com.ocio.backend17.entities.Comments;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    @MessageMapping
    @SendTo("/55")
    public Comments sendComment(Comments comment, @DestinationVariable("event_id")  Double event_id) {
        System.out.println(comment.getComment());
        return comment;
    }
}
