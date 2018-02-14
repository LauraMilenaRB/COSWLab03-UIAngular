package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;

import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
public interface UserService
{
    public List<User> getUsers();

    public User getUser( Long id );

    public User getUser( String usname );

    public void createUser( User user );

    public User findUserByEmail( String email );

    public User findUserByEmailAndPassword( String email, String password );
}