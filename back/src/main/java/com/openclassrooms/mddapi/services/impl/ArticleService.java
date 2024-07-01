package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.exceptions.ApiException;
import com.openclassrooms.mddapi.models.Article;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Topic;
import com.openclassrooms.mddapi.repositories.IArticleRepository;
import com.openclassrooms.mddapi.repositories.ICommentRepository;
import com.openclassrooms.mddapi.services.IArticleService;
import com.openclassrooms.mddapi.services.ITopicService;
import com.openclassrooms.mddapi.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ArticleService implements IArticleService {

    private final ITopicService topicService;
    private final IUserService userService;
    private final IArticleRepository articleRepository;
    private final ICommentRepository commentRepository;

    @Override
    public Article createArticle(String title, String content, long topicId) {
        Topic topic = topicService.findById(topicId);

        Article article = Article.builder()
                .topic(topic)
                .title(title)
                .content(content)
                .author(userService.me())
                .comments(List.of())
                .build();

        return articleRepository.save(article);
    }

    @Override
    public List<Article> getArticles() {
        return articleRepository.findAll();
    }

    @Override
    public Article getArticle(long id) {
        return articleRepository.findById(id).orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND, "Article non trouvé."));
    }

    @Override
    public Article createComment(long id, String content) {
        Comment comment = Comment.builder()
                .content(content)
                .author(userService.me())
                .article(getArticle(id))
                .build();

        commentRepository.save(comment);

        return getArticle(id);
    }
}
