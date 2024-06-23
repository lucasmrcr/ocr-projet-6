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
     * @param password the password
     * @return the new user
     */
    User registerNewUser(String username, String password);

    /**
     * Find a user by username.
     *
     * @param username the username
     * @return the user
     */
    Optional<User> findByUsername(String username);
}
