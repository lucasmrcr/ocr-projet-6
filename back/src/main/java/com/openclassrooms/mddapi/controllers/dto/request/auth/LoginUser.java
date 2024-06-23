package com.openclassrooms.mddapi.controllers.dto.request.auth;

import jakarta.validation.constraints.NotBlank;

/**
 * This class represents the login request.
 *
 * @param username
 * @param password
 */
public record LoginUser(
        @NotBlank(message = "Le nom d'utilisateur ne peut pas être vide.")
        String username,
        @NotBlank(message = "Le mot de passe ne peut pas être vide.")
        String password
) {
}
