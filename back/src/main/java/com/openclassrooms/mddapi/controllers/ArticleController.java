package com.openclassrooms.mddapi.controllers;

import com.openclassrooms.mddapi.controllers.dto.request.article.CreateArticle;
import com.openclassrooms.mddapi.controllers.dto.request.article.CreateComment;
import com.openclassrooms.mddapi.controllers.dto.response.article.ArticleDetails;
import com.openclassrooms.mddapi.services.IArticleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

/**
 * Controller to handle article requests.
 */
@RequiredArgsConstructor
@RestController
@CrossOrigin
@RequestMapping("/articles")
public class ArticleController {

    private final IArticleService articleService;

    /**
     * Create a new article.
     *
     * @param createArticle the article to create
     * @return the created article
     */
    @PostMapping
    public ResponseEntity<ArticleDetails> createArticle(@RequestBody CreateArticle createArticle) {
        ArticleDetails article = ArticleDetails.from(articleService.createArticle(createArticle.title(), createArticle.content(), createArticle.topicId()));
        return ResponseEntity.created(URI.create("/articles/" + article.id())).body(article);
    }

    /**
     * Get all articles.
     *
     * @return the list of articles
     */
    @GetMapping
    public ResponseEntity<List<ArticleDetails>> getArticles() {
        return ResponseEntity.ok(ArticleDetails.from(articleService.getArticles()));
    }

    /**
     * Get an article by its id.
     *
     * @param id the id of the article
     * @return the article
     */
    @GetMapping("/{id}")
    public ResponseEntity<ArticleDetails> getArticle(@PathVariable long id) {
        return ResponseEntity.ok(ArticleDetails.from(articleService.getArticle(id)));
    }

    /**
     * Create a new comment on an article.
     *
     * @param id            the id of the article
     * @param createComment the comment to create
     * @return the updated article
     */
    @PostMapping("/{id}/comments")
    public ResponseEntity<ArticleDetails> createComment(@PathVariable long id, @RequestBody CreateComment createComment) {
        ArticleDetails article = ArticleDetails.from(articleService.createComment(id, createComment.content()));
        return ResponseEntity.created(URI.create("/articles/" + article.id())).body(article);
    }

}
