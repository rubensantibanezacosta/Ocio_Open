package com.ocio.backend17.services;

import com.ocio.backend17.config.IConfig;
import com.ocio.backend17.config.IConfigImpl;
import com.ocio.backend17.entities.Roles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
public class UserDetails implements UserDetailsService {
    @Autowired IRolesImpl iRoles;
    @Autowired
    IConfigImpl iConfig;
    @Override
    public org.springframework.security.core.userdetails.UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Roles roles=iRoles.getRole(iConfig.getUserRoleKey()).get();
        List<GrantedAuthority> authorities=new ArrayList<>();
        List<String> scopes= List.of(roles.getPermissions().split("/"));
        scopes.forEach(s -> authorities.add(new GrantedAuthority() {
            @Override
            public String getAuthority() {
                return s;
            }
        }));
        return new User("ruben","{noop}1234",authorities);
    }
}
