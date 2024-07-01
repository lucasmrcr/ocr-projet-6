package com.openclassrooms.mddapi.controllers.dto.response.article;

import com.openclassrooms.mddapi.controllers.dto.response.topic.TopicDetails;
import com.openclassrooms.mddapi.controllers.dto.response.user.LightweightUserDetails;

import java.time.Instant;
import java.util.List;

/**
 * Represents an article.
 *
 * @param id        The unique identifier of the article.
 * @param title     The title of the article.
 * @param content   The content of the article.
 * @param author    The author of the article.
 * @param topic     The topic of the article.
 * @param comments  The comments of the article.
 * @param createdAt The creation date of the article.
 */
public record ArticleDetails(
        long id,
        String title,
        String content,
        LightweightUserDetails author,
        TopicDetails topic,
        List<CommentDetails> comments,
        Instant createdAt) {

    public static ArticleDetails from(com.openclassrooms.mddapi.models.Article article) {
        return new ArticleDetails(
                article.getId(),
                article.getTitle(),
                article.getContent(),
                LightweightUserDetails.from(article.getAuthor()),
                TopicDetails.from(article.getTopic()),
                CommentDetails.from(article.getComments()),
                article.getCreatedAt()
        );
    }

    public static List<ArticleDetails> from(List<com.openclassrooms.mddapi.models.Article> articles) {
        return articles.stream().map(ArticleDetails::from).toList();
    }
}
