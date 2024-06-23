package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.controllers.dto.response.user.UserDetails;
import com.openclassrooms.mddapi.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Controller to handle user requests.
 */
@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final IUserService userService;

    /**
     * Get the current user.
     *
     * @return the current user
     */
    @GetMapping("/me")
    public ResponseEntity<UserDetails> me() {
        return ResponseEntity.ok(UserDetails.from(userService.me()));
    }

}
