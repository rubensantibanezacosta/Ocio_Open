package com.ocio.backend17.controllers;

import com.ocio.backend17.dto.BasicAuth;
import com.ocio.backend17.dto.BasicAuthResponse;
import com.ocio.backend17.dto.ResponseMessageDto;
import com.ocio.backend17.security.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.userdetails.UserDetails;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BasicAuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private JWTUtil jwtUtil;

    @PostMapping(value = "/api/auth/sign-in", consumes = "application/json")
    public ResponseEntity<?> login(@RequestBody BasicAuth basicAuth) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(basicAuth.getUsername(), basicAuth.getPassword()));
            UserDetails userDetails = userDetailsService.loadUserByUsername(basicAuth.getUsername());
            String jwt = jwtUtil.generateToken(userDetails);
            return new ResponseEntity<>(new BasicAuthResponse(jwt),HttpStatus.OK);
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(new ResponseMessageDto("Unauthorized"), HttpStatus.UNAUTHORIZED);
        }
    }
}
