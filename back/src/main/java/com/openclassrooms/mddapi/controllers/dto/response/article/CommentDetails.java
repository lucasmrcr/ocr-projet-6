package com.openclassrooms.mddapi.controllers.dto.response.article;

import com.openclassrooms.mddapi.controllers.dto.response.user.LightweightUserDetails;
import com.openclassrooms.mddapi.models.Comment;

import java.time.Instant;
import java.util.List;

/**
 * Represents a comment.
 *
 * @param id        The unique identifier of the comment.
 * @param content   The content of the comment.
 * @param author    The author of the comment.
 * @param createdAt The creation date of the comment.
 */
public record CommentDetails(
        long id,
        String content,
        LightweightUserDetails author,
        Instant createdAt
) {

    public static CommentDetails from(com.openclassrooms.mddapi.models.Comment comment) {
        return new CommentDetails(
                comment.getId(),
                comment.getContent(),
                LightweightUserDetails.from(comment.getAuthor()),
                comment.getCreatedAt()
        );
    }

    public static List<CommentDetails> from(List<Comment> comments) {
        return comments.stream().map(CommentDetails::from).toList();
    }

}
