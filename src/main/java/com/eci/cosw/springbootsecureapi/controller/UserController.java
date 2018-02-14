package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.User;
import com.eci.cosw.springbootsecureapi.service.UserService;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.jws.soap.SOAPBinding;
import javax.servlet.ServletException;
import java.util.Date;
import java.util.List;

/**
 * @author Santiago Carrillo
 * 8/21/17.
 */
@RestController
@RequestMapping( "user" )
public class UserController
{

    @Autowired
    private UserService userService;

    @RequestMapping( value = "/login", method = RequestMethod.POST )
    public Token login( @RequestBody User login ) throws ServletException {

        String jwtToken = "";

        if ( login.getUsername() == null || login.getPassword() == null )
        {
            throw new ServletException( "Please fill in username and password" );
        }

        String username = login.getUsername();
        String password = login.getPassword();

        User user = userService.getUser( username );

        if ( user == null )
        {
            throw new ServletException( "User username not found." );
        }

        String pwd = user.getPassword();

        if ( !password.equals( pwd ) )
        {
            throw new ServletException( "Invalid login. Please check your name and password." );
        }

        jwtToken = Jwts.builder().setSubject( username ).claim( "roles", "user" ).setIssuedAt( new Date() ).signWith(
            SignatureAlgorithm.HS256, "secretkey" ).compact();

        return new Token( jwtToken );
    }

    public class Token {
        String access_token;
        public Token( String access_token )
        {
            this.access_token = access_token;
        }
        public String getAccessToken()
        {
            return access_token;
        }
        public void setAccessToken( String access_token )
        {
            this.access_token = access_token;
        }
    }

    @RequestMapping( path = "/byEmail/{email}.{l}", method = RequestMethod.GET )
    public ResponseEntity<?> getUserByEmail(@PathVariable String email,@PathVariable String l){
        try {
            System.out.println(email);
            return new ResponseEntity<>(userService.findUserByEmail(email+"."+l), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            return new ResponseEntity<>("Error"+ex,HttpStatus.NOT_FOUND);
        }
    }
    @RequestMapping(path = "/listuser", method = RequestMethod.GET )
    public ResponseEntity<?> getUsers() {
        try {
            return new ResponseEntity<>(userService.getUsers(), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            return new ResponseEntity<>("Error"+ex,HttpStatus.NOT_FOUND);
        }
    }
    @RequestMapping( value = "/newuser", method = RequestMethod.POST )
    public ResponseEntity<?> registerUser(@RequestBody User u ){
        try {
            userService.createUser(u);

        } catch (Exception ex) {
            return new ResponseEntity<>("Error"+ex,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>( HttpStatus.CREATED);
    }

}
