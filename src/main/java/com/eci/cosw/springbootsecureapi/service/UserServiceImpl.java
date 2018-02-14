package com.eci.cosw.springbootsecureapi.service;

import com.eci.cosw.springbootsecureapi.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
@Service
public class UserServiceImpl implements UserService {

    private List<User> users = new ArrayList<>();


    @Autowired
    public UserServiceImpl() {
    }

    @PostConstruct
    private void populateSampleData() {
        users.add( new User( "xyz","test@mail.com", "password", "Andres", "Perez" ,
                "http://www.your3dsource.com/images/facepic2.jpeg"));
    }


    @Override
    public List<User> getUsers()
    {
        return users;
    }

    @Override
    public User getUser( Long id )
    {
        for(User us : users){
            if (us.getId()==id){
                return us;
            }
        }
        return null;
    }

    @Override
    public User getUser( String usname ) {
        for(User us : users){
            if (us.getUsername().equals(usname)){
                return us;
            }
        }
        return null;
    }

    @Override
    public void createUser( User user )
    {
        users.add(user);
    }

    @Override
    public User findUserByEmail( String email ) {
        User user=null;
        for(User us : users){
            if (us.getEmail().equals(email)){
                user=us;
            }
        }
        return user;
    }

    @Override
    public User findUserByEmailAndPassword( String email, String password )
    {
        return users.get( 0 );
    }

}
