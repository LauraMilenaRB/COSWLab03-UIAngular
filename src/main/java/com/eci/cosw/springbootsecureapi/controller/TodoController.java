package com.eci.cosw.springbootsecureapi.controller;

import com.eci.cosw.springbootsecureapi.model.Todo;
import com.eci.cosw.springbootsecureapi.model.User;
import com.eci.cosw.springbootsecureapi.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;
import java.util.List;

/**
 * Created by laura on 7/02/2018.
 */
@RestController
@RequestMapping( "api" )
public class TodoController {
    @Autowired
    private TodoService todo;

    @RequestMapping(value = "/todo", method = RequestMethod.GET )
    public ResponseEntity<?> getTodo() {
        try {
            return new ResponseEntity<>(todo.getTodoList(), HttpStatus.ACCEPTED);
        } catch (Exception ex) {
            return new ResponseEntity<>("Error"+ex,HttpStatus.NOT_FOUND);
        }
    }
    @RequestMapping( value = "/newtodo", method = RequestMethod.POST )
    public ResponseEntity<?> registerUser(@RequestBody Todo t ){
        try {
            todo.addTodo(t);
        } catch (Exception ex) {
            return new ResponseEntity<>("Error"+ex,HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>( HttpStatus.CREATED);
    }
}

