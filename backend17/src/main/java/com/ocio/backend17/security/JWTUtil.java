package com.ocio.backend17.security;


import com.ocio.backend17.config.IConfigImpl;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;

public class JWTUtil {
@Autowired
    IConfigImpl iCofigImpl;
    public String generateToken(UserDetails userDetails){
        return Jwts.builder().setSubject(userDetails.getUsername()).setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis()+1000 *60 * 60 *10))
                .signWith(SignatureAlgorithm.HS256,iCofigImpl.getJwtSecret()).compact();
    }
}
