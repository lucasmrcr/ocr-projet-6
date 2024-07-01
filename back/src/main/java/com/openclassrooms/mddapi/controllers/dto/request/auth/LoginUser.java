package com.openclassrooms.mddapi.controllers.dto.request.auth;

import jakarta.validation.constraints.NotBlank;

/**
 * This class represents the login request.
 *
 * @param email
 * @param password
 */
public record LoginUser(
        @NotBlank(message = "L'email ne peut pas être vide.")
        String email,
        @NotBlank(message = "Le mot de passe ne peut pas être vide.")
        String password
) {
}
