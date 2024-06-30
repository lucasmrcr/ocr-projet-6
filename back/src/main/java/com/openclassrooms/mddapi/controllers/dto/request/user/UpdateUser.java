package com.openclassrooms.mddapi.controllers.dto.request.user;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

/**
 * DTO to represent an update user request.
 *
 * @param username the username
 * @param email    the email
 * @param password the password
 */
public record UpdateUser(
        @NotBlank(message = "Le nom d'utilisateur ne peut pas être vide.")
        String username,
        @NotBlank(message = "L'email ne peut pas être vide.")
        String email,
        @Pattern(regexp = "^(?:(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{8,}|)$",
                message = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.")
        String password
) {
}
