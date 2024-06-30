package com.openclassrooms.mddapi.controllers.dto.response;

import java.util.Map;

/**
 * This class represents the API validation exception response.
 *
 * @param error The exception error.
 * @param messages The exception fields message.
 */
public record ApiValidationException(
        String error,
        Map<String, String> messages
) {
}
