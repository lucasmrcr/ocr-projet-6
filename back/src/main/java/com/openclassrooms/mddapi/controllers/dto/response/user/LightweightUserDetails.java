package com.openclassrooms.mddapi.controllers.dto.response.user;

import com.openclassrooms.mddapi.models.User;

/**
 * DTO to represent user details.
 *
 * @param id             the id
 * @param username       the username
 * @param email          the email
 */
public record LightweightUserDetails(
        long id,
        String username,
        String email
) {

    public static LightweightUserDetails from(User user) {
        return new LightweightUserDetails(user.getId(), user.getUsername(), user.getEmail());
    }

}
