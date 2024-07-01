package com.openclassrooms.mddapi.controllers.dto.request.article;

/**
 * Represents the data to create an article.
 *
 * @param topicId the topic id
 * @param title   the title
 * @param content the content
 */
public record CreateArticle(
        long topicId,
        String title,
        String content
) {
}
