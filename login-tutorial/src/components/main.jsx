import React, { useState, useEffect } from 'react';
import FormLogin from './loginForm.jsx'
import Register from './registerForm.jsx'
import Home from './homepage.jsx';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {setCurrentUser} from './store/actions/userActions.js'
import {Container} from 'react-bootstrap';
import axios from 'axios';
var jwtDecode = require('jwt-decode');
const Main = (props) => {
    let auth = useSelector(state => state.auth);
    let dispatch = useDispatch();
    useEffect(() => {
      const token = localStorage.getItem('token')
      try{
          console.log(jwtDecode(token))
          dispatch(setCurrentUser(localStorage.getItem('user')))
        }
    catch (err){
        console.log(err)
    }
    },[])
   
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Container>
                        <FormLogin/>
                    </Container>
                </Route>
                <Route path="/register">
                    <Container>
                        <Register></Register>
                    </Container>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}
export default Main