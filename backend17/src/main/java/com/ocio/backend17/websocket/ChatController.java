package com.ocio.backend17.websocket;

import com.ocio.backend17.entities.Comments;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;


@Controller
public class ChatController {
    @MessageMapping("/message")
    @SendTo("/comments-chat/{event_id}")
    public Comments newComment(Comments comment, @DestinationVariable("event_id") String event_id) {
        System.out.println(comment.toString());
        return newComment(comment, String.valueOf((int)comment.getEvent_id()));
    }

    @SendTo("/comments-chat/delete_{event_id}")
    public int deleteComment(int index, @DestinationVariable String event_id) {
        return index;
    } 
}
