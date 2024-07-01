package com.openclassrooms.mddapi.controllers.dto.response.user;

import com.openclassrooms.mddapi.controllers.dto.response.topic.Topic;
import com.openclassrooms.mddapi.models.User;

import java.util.List;

/**
 * DTO to represent user details.
 *
 * @param id             the id
 * @param username       the username
 * @param email          the email
 * @param followedTopics the followed topics
 */
public record UserDetails(
        long id,
        String username,
        String email,
        List<Topic> followedTopics
) {

    public static UserDetails from(User user) {
        return new UserDetails(user.getId(), user.getUsername(), user.getEmail(), Topic.from(user.getFollowedTopics()));
    }

}
