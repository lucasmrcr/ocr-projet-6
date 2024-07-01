package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.controllers.dto.request.user.UpdateUser;
import com.openclassrooms.mddapi.controllers.dto.response.user.UserDetails;
import com.openclassrooms.mddapi.services.IUserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Controller to handle user requests.
 */
@RequiredArgsConstructor
@RestController
@CrossOrigin
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

    /**
     * Update a user.
     *
     * @param updateUser the user to update
     * @return the updated user
     */
    @PutMapping("/me")
    public ResponseEntity<UserDetails> update(@Valid @RequestBody UpdateUser updateUser) {
        return ResponseEntity.ok(UserDetails.from(userService.update(updateUser.username(), updateUser.email())));
    }

}
