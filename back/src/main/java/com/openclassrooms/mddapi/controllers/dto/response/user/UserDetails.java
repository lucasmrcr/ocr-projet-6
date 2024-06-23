package com.openclassrooms.mddapi.controllers.dto.response.user;

import com.openclassrooms.mddapi.models.User;

/**
 * DTO to represent user details.
 *
 * @param username the username
 * @param email    the email
 */
public record UserDetails(
        String username,
        String email
) {

    public static UserDetails from(User user) {
        return new UserDetails(user.getUsername(), user.getEmail());
    }

}
