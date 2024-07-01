package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.exceptions.ApiException;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repositories.ITopicRepository;
import com.openclassrooms.mddapi.services.ITopicService;
import com.openclassrooms.mddapi.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TopicService implements ITopicService {

    private final ITopicRepository topicRepository;
    private final IUserService userService;

    @Override
    public List<Topic> getTopics(boolean followed) {
        if (followed) {
            return userService.me().getFollowedTopics();
        } else {
            return topicRepository.findAll();
        }
    }

    @Override
    public void likeTopic(long topicId) {
        User loggedUser = userService.me();
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Le topic n'existe pas."));

        if (loggedUser.getFollowedTopics().stream().anyMatch(t -> t.getId() == topic.getId())) {
            return;
        }

        loggedUser.getFollowedTopics().add(topic);
        userService.save(loggedUser);
    }

    @Override
    public void dislikeTopic(long topicId) {
        User loggedUser = userService.me();
        Topic topic = topicRepository.findById(topicId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Le topic n'existe pas."));

        loggedUser.getFollowedTopics().removeIf(t -> t.getId() == topic.getId());
        userService.save(loggedUser);
    }

    @Override
    public Topic findById(long topicId) {
        return topicRepository.findById(topicId)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Le topic n'existe pas."));
    }
}
