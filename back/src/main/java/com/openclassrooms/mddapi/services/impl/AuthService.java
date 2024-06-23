package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.exceptions.ApiException;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.services.IAuthService;
import com.openclassrooms.mddapi.services.IJWTService;
import com.openclassrooms.mddapi.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class AuthService implements IAuthService {

    private final IUserService userService;
    private final IJWTService jwtService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public String register(String username, String email, String password) {
        User registeredUser = userService.registerNewUser(username, email, password);
        // When user is registered, the response will contain a JWT token
        return jwtService.generateToken(new UsernamePasswordAuthenticationToken(
                registeredUser, null, registeredUser.getAuthorities()
        ));
    }

    @Override
    public String login(String email, String password) {
        // To make login action, first we find the user by email and then we check if the password is correct
        // If nothing matches we throw an exception which will be caught by exception handler
        User loggedUser = userService.findByEmail(email)
                .filter(user -> passwordEncoder.matches(password, password))
                .orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "Utilisateur ou mot de passe incorrect"));

        // And then we generate a JWT token
        return jwtService.generateToken(new UsernamePasswordAuthenticationToken(
                loggedUser, null, loggedUser.getAuthorities()
        ));
    }
}
