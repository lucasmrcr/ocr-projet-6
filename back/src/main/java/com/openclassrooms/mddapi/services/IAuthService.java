package com.openclassrooms.mddapi.services;

/**
 * Service to handle authentication actions.
 */
public interface IAuthService {
    /**
     * Register a new user.
     *
     * @param username the username
     * @param email the email
     * @param password the password
     * @return the auth jwt token
     */
    String register(String username, String email, String password);

    /**
     * Login an existing user.
     *
     * @param username the username
     * @param password the password
     * @return the auth jwt token
     */
    String login(String username, String password);
}
