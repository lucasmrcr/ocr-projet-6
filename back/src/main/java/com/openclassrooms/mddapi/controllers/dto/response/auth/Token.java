package com.openclassrooms.mddapi.controllers.dto.response.auth;

/**
 * This class represents the token response.
 *
 * @param token
 */
public record Token(
        String token
) {
}
