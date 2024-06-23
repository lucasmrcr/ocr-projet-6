package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.models.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

/**
 * Service to handle user actions.
 */
public interface IUserService extends UserDetailsService {

    /**
     * Register a new user.
     *
     * @param username the username
     * @param email    the email
     * @param password the password
     * @return the new user
     */
    User registerNewUser(String username, String email, String password);

    /**
     * Find a user by username.
     *
     * @param email the email
     * @return the user
     */
    Optional<User> findByEmail(String email);

    /**
     * Get the current user.
     *
     * @return the current user
     */
    User me();
}
