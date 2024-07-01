package com.openclassrooms.mddapi.controllers.dto.response;

/**
 * This class represents the API exception response.
 *
 * @param message The exception message.
 */
public record ApiException(
        String message
) {
}
