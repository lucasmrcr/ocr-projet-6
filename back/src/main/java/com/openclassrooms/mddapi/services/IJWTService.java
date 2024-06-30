package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.models.User;

/**
 * Service to handle JWT actions.
 */
public interface IJWTService {
    /**
     * Generate a JWT token from an authentication object.
     *
     * @param user the user
     * @return the JWT token
     */
    String generateToken(User user);
}
