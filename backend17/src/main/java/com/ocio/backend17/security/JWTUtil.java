package com.ocio.backend17.security;


import com.ocio.backend17.config.IConfigImpl;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.util.Date;
@Component
public class JWTUtil {
@Autowired
    IConfigImpl iCofigImpl;
    public String generateToken(UserDetails userDetails){
        return Jwts.builder().setSubject(userDetails.getUsername()).setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+1000 *60 * 60 *10))
                .signWith(SignatureAlgorithm.HS256,iCofigImpl.getJwtSecret()).compact();
    }


    public Boolean validateToken(String jwt){
        return Jwts.parser().setSigningKey();
    }

    public String extractUsername(String token){
        return getClaims(token).getSubject();
    }

    public boolean isTokenExpired(String token){
        return getClaims(token).getExpiration().before(new Date());
    }
    private Claims getClaims(String token){
        return Jwts.parser().setSigningKey(iCofigImpl.getJwtSecret()).parseClaimsJws(token).getBody();
    }
}
