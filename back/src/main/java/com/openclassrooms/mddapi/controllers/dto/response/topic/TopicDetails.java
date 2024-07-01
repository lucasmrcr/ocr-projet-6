package com.openclassrooms.mddapi.controllers.dto.response.topic;

import java.util.List;

/**
 * Represents a topic.
 *
 * @param id          The unique identifier of the topic.
 * @param name        The name of the topic.
 * @param description The description of the topic.
 */
public record TopicDetails(
        long id,
        String name,
        String description
) {

    public static TopicDetails from(com.openclassrooms.mddapi.models.Topic topic) {
        return new TopicDetails(topic.getId(), topic.getName(), topic.getDescription());
    }

    public static List<TopicDetails> from(List<com.openclassrooms.mddapi.models.Topic> topics) {
        return topics.stream().map(TopicDetails::from).toList();
    }

}
