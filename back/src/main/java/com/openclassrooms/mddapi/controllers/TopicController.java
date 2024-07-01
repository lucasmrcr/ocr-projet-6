package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.controllers.dto.response.topic.Topic;
import com.openclassrooms.mddapi.services.ITopicService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * This class is the controller for the topics.
 */
@RequiredArgsConstructor
@RestController
@CrossOrigin
public class TopicController {

    private final ITopicService topicService;

    /**
     * Get all topics.
     *
     * @param followed Whether to get only the topics followed by the user.
     * @return The list of topics.
     */
    @GetMapping("/topics")
    public ResponseEntity<List<Topic>> getTopics(@RequestParam boolean followed) {
        return ResponseEntity.ok(Topic.from(topicService.getTopics(followed)));
    }

    /**
     * Get a topic by its id.
     *
     * @param id The id of the topic.
     * @return Empty no content response.
     */
    @PutMapping("/users/me/topics/{id}")
    public ResponseEntity<?> likeTopic(@PathVariable long id) {
        topicService.likeTopic(id);
        return ResponseEntity.noContent().build();
    }

    /**
     * Dislike a topic by its id.
     *
     * @param id The id of the topic.
     * @return Empty no content response.
     */
    @DeleteMapping("/users/me/topics/{id}")
    public ResponseEntity<?> dislikeTopic(@PathVariable long id) {
        topicService.dislikeTopic(id);
        return ResponseEntity.noContent().build();
    }

}
