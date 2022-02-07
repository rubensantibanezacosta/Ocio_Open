package com.ocio.backend17.security.filterJwt;


import com.ocio.backend17.security.JWTUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class JwtFilterRequest extends OncePerRequestFilter {
    @Autowired
    JWTUtil jwtUtil;
    @Autowired
    UserDetailsService userDetailsService;


private final static Logger logger = LoggerFactory.getLogger(JwtFilterRequest.class);
   @Override
   protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
      try {
          String authorizationHeader = request.getHeader("Authorization");
          if (authorizationHeader != null && authorizationHeader.startsWith("Bearer")) {
              String jwt = authorizationHeader.substring(7);
            logger.debug(jwtUtil.extractScopes(jwt).toString());
              if (jwtUtil.validateToken(jwt)) {
                  String username = jwtUtil.extractUsername(jwt);
                  UserDetails userDetails=userDetailsService.loadUserByUsername(username);
                  UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, userDetails.getAuthorities());
                  SecurityContextHolder.getContext().setAuthentication(auth);
              }

          }
      }catch (Exception e){
        logger.error("Failed doFilter");
      }
      filterChain.doFilter(request,response);
    }
}
