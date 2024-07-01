package com.openclassrooms.mddapi.controllers.dto.request.user;

import jakarta.validation.constraints.NotBlank;

/**
 * DTO to represent an update user request.
 *
 * @param username the username
 * @param email    the email
 */
public record UpdateUser(
        @NotBlank(message = "Le nom d'utilisateur ne peut pas être vide.")
        String username,
        @NotBlank(message = "L'email ne peut pas être vide.")
        String email
) {
}
