package com.openclassrooms.mddapi.services.impl;

import com.openclassrooms.mddapi.services.ISecurityService;
import com.openclassrooms.mddapi.services.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SecurityService implements ISecurityService {

    private final IUserService userService;

    @Override
    public boolean doIdEqualsToCurrentUser(long id) {
        return userService.me().getId() == id;
    }

}
