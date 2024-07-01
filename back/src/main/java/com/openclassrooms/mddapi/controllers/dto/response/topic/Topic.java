package com.openclassrooms.mddapi.controllers.dto.response.topic;

import java.util.List;

/**
 * Represents a topic.
 *
 * @param id          The unique identifier of the topic.
 * @param name        The name of the topic.
 * @param description The description of the topic.
 */
public record Topic(
        long id,
        String name,
        String description
) {

    public static Topic from(com.openclassrooms.mddapi.models.Topic topic) {
        return new Topic(topic.getId(), topic.getName(), topic.getDescription());
    }

    public static List<Topic> from(List<com.openclassrooms.mddapi.models.Topic> topics) {
        return topics.stream().map(Topic::from).toList();
    }

}
