package com.ocio.backend17.entities;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
public class Roles {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "number", nullable = false)
    private int number;
    @Basic
    @Column(name = "role_key", nullable = false, length = 500)
    private String rolekey;
    @Basic
    @Column(name = "permissions", nullable = false, length = 2000)
    private String permissions;
    @Basic
    @Column(name = "createdat", nullable = false)
    private Date createdAt;
    @Basic
    @Column(name = "updatedat", nullable = false)
    private Date updatedAt;

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getRolekey() {
        return rolekey;
    }

    public void setRolekey(String rolekey) {
        this.rolekey = rolekey;
    }

    public String getPermissions() {
        return permissions;
    }

    public void setPermissions(String permissions) {
        this.permissions = permissions;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        Roles roles = (Roles) o;
        return number == roles.number && Objects.equals(rolekey, roles.rolekey)
                && Objects.equals(permissions, roles.permissions) && Objects.equals(createdAt, roles.createdAt)
                && Objects.equals(updatedAt, roles.updatedAt);
    }

    @Override
    public int hashCode() {
        return Objects.hash(number, rolekey, permissions, createdAt, updatedAt);
    }
}
