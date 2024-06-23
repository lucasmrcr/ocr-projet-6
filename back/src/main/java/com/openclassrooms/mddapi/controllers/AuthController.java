package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.controllers.dto.request.auth.LoginUser;
import com.openclassrooms.mddapi.controllers.dto.request.auth.RegisterUser;
import com.openclassrooms.mddapi.controllers.dto.response.auth.Token;
import com.openclassrooms.mddapi.services.IAuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller to handle authentication requests.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final IAuthService authService;

    /**
     * Register a new user.
     *
     * @param registerUser the user to register
     * @return the auth jwt token
     */
    @PostMapping("/register")
    public ResponseEntity<Token> register(@Valid @RequestBody RegisterUser registerUser) {
        return ResponseEntity.ok(new Token(authService.register(registerUser.username(), registerUser.password())));
    }

    /**
     * Login an existing user.
     *
     * @param loginUser the user to login
     * @return the auth jwt token
     */
    @PostMapping("/login")
    public ResponseEntity<Token> login(@Valid @RequestBody LoginUser loginUser) {
        return ResponseEntity.ok(new Token(authService.login(loginUser.username(), loginUser.password())));
    }

}
