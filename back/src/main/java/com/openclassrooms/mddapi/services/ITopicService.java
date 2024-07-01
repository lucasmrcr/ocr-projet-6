package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.models.Topic;

import java.util.List;

/**
 * Service to manage topics.
 */
public interface ITopicService {
    /**
     * Get all topics.
     *
     * @param followed Whether to get only followed topics.
     * @return The list of topics.
     */
    List<Topic> getTopics(boolean followed);

    /**
     * Like a topic.
     *
     * @param topicId The id of the topic to like.
     */
    void likeTopic(long topicId);

    /**
     * Dislike a topic.
     *
     * @param topicId The id of the topic to dislike.
     */
    void dislikeTopic(long topicId);
}
