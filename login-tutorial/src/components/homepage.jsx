import React, { useState, useEffect } from 'react';
import {Container,Jumbotron,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {setLogOut} from './store/actions/userActions.js'
import Axios from 'axios';
const Home =(props) => {
    let history=useHistory();
    let auth = useSelector(state => state.auth);
    let dispatch = useDispatch()
    let [secret,setSecret] = useState(null);
    const handleClick =() => {
        if (!secret) {Axios.get('https://bff-training.et.r.appspot.com/sensitive-data', {headers: {'Authorization': `Bearer ${localStorage.getItem('token')}` }})
        .then((res) => {
            const dataArr = (res.data).map((val) => (<li key={val._id}>{val.data}</li>))
            setSecret(dataArr)
        })
        .catch((err) => (console.log(err)))}
        else setSecret(null)
    }
    const handleLogOut = () => {
        dispatch(setLogOut())
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
    return (
        <Container>
            <Jumbotron style={{marginTop: "9%"}}>
                <h1>Welcome to homepage!</h1>
                    { !auth.isAuthorized && <span>
                        <p>If you need access to sensitive information, login first</p>
                        <Button variant="primary" onClick={() => {history.push('/login')}}>Login</Button>
                    </span> }
                    { auth.isAuthorized && <span>
                        <p>Hello {auth.user}</p>
                        <Button variant="warning" onClick={handleClick}>See secret</Button>
                        <ul>
                            {secret}
                        </ul>
                        <Button varaint="secondary" onClick={handleLogOut}>Log out</Button>
                        </span>}
            </Jumbotron>
        </Container>
    )
}
export default Home;