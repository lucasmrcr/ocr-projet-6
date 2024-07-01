package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.exceptions.ApiException;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.IUserRepository;
import com.openclassrooms.mddapi.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.stereotype.Service;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService implements IUserService {

    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    @Override
    public User registerNewUser(String username, String email, String password) {
        return userRepository.save(User.builder().username(username).email(email).password(passwordEncoder.encode(password)).build());
    }

    @Override
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public User me() {
        // To get connected user, we use the subject of the jwt token. It contains the email of the user
        Jwt jwt = (Jwt) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = jwt.getSubject();
        // When user is not found, we throw an exception which will be caught by exception handler
        return userRepository.findByEmail(email).orElseThrow(() -> new ApiException(HttpStatus.UNAUTHORIZED, "Le token n'est pas valide."));
    }

    @Override
    public User update(String username, String email) {
        User userToUpdate = me();

        userToUpdate.setUsername(username);
        userToUpdate.setEmail(email);

        return save(userToUpdate);
    }

    @Override
    public User findUserByIdOrThrow(long id) {
        return userRepository.findById(id).orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé."));
    }

    @Override
    public User save(User loggedUser) {
        return userRepository.save(loggedUser);
    }
}
