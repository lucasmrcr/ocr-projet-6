package com.openclassrooms.mddapi.controllers.dto.request.auth;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

/**
 * This class represents the registration request.
 *
 * @param username
 * @param password
 */
public record RegisterUser(
        @NotBlank(message = "Le nom d'utilisateur ne peut pas être vide.")
        String username,
        @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}$",
                message = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.")
        String password
) {
}
