package com.openclassrooms.mddapi.services;

import org.springframework.security.core.Authentication;

/**
 * Service to handle JWT actions.
 */
public interface IJWTService {
    /**
     * Generate a JWT token from an authentication object.
     *
     * @param authentication the authentication object
     * @return the JWT token
     */
    String generateToken(Authentication authentication);
}
