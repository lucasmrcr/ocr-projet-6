package com.openclassrooms.mddapi.configuration;

import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.repositories.ITopicRepository;
import com.openclassrooms.mddapi.repositories.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;

/**
 * This class initializes the database with default topics and a default user when the application is started in the "dev" profile.
 */
@RequiredArgsConstructor
@Configuration
public class DevDatabaseInitializer {

    private final ITopicRepository topicRepository;
    private final IUserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Profile("dev")
    @Bean
    public ApplicationRunner initializeDatabase() {
        return args -> {
            initializeDefaultTopics();
            initializeDevUser();
        };
    }

    /**
     * Initializes the database with a default user if no user exists.
     */
    private void initializeDevUser() {
        if (userRepository.count() == 0) {
            userRepository.save(com.openclassrooms.mddapi.models.User.builder()
                    .username("dev")
                    .email("dev@dev.com")
                    .password(passwordEncoder.encode("dev"))
                    .build());
        }
    }

    /**
     * Initializes the database with default topics if no topic exists.
     */
    private void initializeDefaultTopics() {
        if (topicRepository.count() == 0) {
            topicRepository.saveAll(List.of(
                    Topic.builder()
                            .name("Java")
                            .description("Java est un langage de programmation orienté objet créé par Sun Microsystems en 1995. Il est très populaire et est utilisé pour développer des applications de bureau, des applications mobiles, des applications Web et des services Web.")
                            .build(),
                    Topic.builder()
                            .name("Spring")
                            .description("Spring est un framework open source pour le développement d'applications Java. Il est très populaire et est utilisé pour développer des applications Web, des services Web, des applications de bureau et des applications mobiles.")
                            .build(),
                    Topic.builder()
                            .name("Angular")
                            .description("Angular est un framework open source pour le développement d'applications Web. Il est très populaire et est utilisé pour développer des applications Web monopages (SPA).")
                            .build(),
                    Topic.builder()
                            .name("React")
                            .description("React est une bibliothèque JavaScript open source pour le développement d'interfaces utilisateur. Elle est très populaire et est utilisée pour développer des applications Web monopages (SPA).")
                            .build()
            ));
        }
    }
}
