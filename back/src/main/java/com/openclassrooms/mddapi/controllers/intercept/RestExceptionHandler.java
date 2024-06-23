package com.openclassrooms.mddapi.controllers.intercept;

import com.openclassrooms.mddapi.controllers.dto.response.ApiValidationException;
import com.openclassrooms.mddapi.exceptions.ApiException;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * This class is used to handle exceptions thrown by the controllers.
 */
@ControllerAdvice
public class RestExceptionHandler {

    /**
     * This method is used to handle exceptions thrown by the controllers when the validation of the data fails.
     * It returns a response with a status code 400 and a body containing the error message.
     *
     * @param exception The exception thrown by the controller.
     * @return A response with a status code 400 and a body containing the error message.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiValidationException> handleValidationExceptions(MethodArgumentNotValidException exception) {
        List<FieldError> fieldErrors = exception.getBindingResult().getFieldErrors();

        Map<String, String> errorByField = fieldErrors
                .stream()
                .filter(fieldError -> fieldError.getDefaultMessage() != null)
                .collect(Collectors.toMap(FieldError::getField, DefaultMessageSourceResolvable::getDefaultMessage));

        return ResponseEntity
                .badRequest()
                .body(new ApiValidationException(
                        "Erreur lors de la validation des données",
                        errorByField
                ));
    }

    /**
     * This method is used to handle exceptions thrown by the controllers when an error occurs.
     *
     * @param exception The exception thrown by the controller.
     * @return A response with a status code and a body containing the error message.
     */
    @ExceptionHandler(ApiException.class)
    public ResponseEntity<com.openclassrooms.mddapi.controllers.dto.response.ApiException> handleApiException(ApiException exception) {
        return ResponseEntity
                .status(exception.getStatus())
                .body(new com.openclassrooms.mddapi.controllers.dto.response.ApiException(
                        exception.getMessage()
                ));
    }

}

