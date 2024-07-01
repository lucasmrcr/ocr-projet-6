package com.openclassrooms.mddapi.services;

import com.openclassrooms.mddapi.models.Article;

import java.util.List;

/**
 * Service to manage articles.
 */
public interface IArticleService {

    /**
     * Create an article.
     *
     * @param title   The title of the article.
     * @param content The content of the article.
     * @param topicId The id of the topic of the article.
     * @return The created article.
     */
    Article createArticle(String title, String content, long topicId);

    /**
     * Get all articles.
     *
     * @return The list of articles.
     */
    List<Article> getArticles();

    /**
     * Get an article by its id.
     *
     * @param id The id of the article.
     * @return The article.
     */
    Article getArticle(long id);

    /**
     * Create a comment on an article.
     *
     * @param id      The id of the article.
     * @param content The content of the comment.
     * @return The updated article.
     */
    Article createComment(long id, String content);
}
