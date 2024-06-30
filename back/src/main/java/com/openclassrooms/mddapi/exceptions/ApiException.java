package com.openclassrooms.mddapi.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatus;

/**
 * Exception to be thrown when an API error occurs.
 */
@Getter
public class ApiException extends RuntimeException {

    /**
     * The HTTP status of the error.
     */
    private final HttpStatus status;

    public ApiException(HttpStatus status, String message, Object... args) {
        super(String.format(message, args));
        this.status = status;
    }
}
