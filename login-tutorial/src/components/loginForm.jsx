import React, { useState, useEffect } from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import {setCurrentUser} from './store/actions/userActions.js'
const FormLogin = (props) => {
    let [user,setUser] = useState('')
    let [password,setPassword] = useState('')
    let [error,setError] = useState('')
    let history = useHistory();
    let auth = useSelector(state => state.auth)
    let dispatch = useDispatch()
    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onSubmit = () => {
        axios.post('https://bff-training.et.r.appspot.com/auth/local',{identifier: user,password: password})
        .then((res) => {
            if (!res) setError("No response from server")
            else {
                console.log(res)
                localStorage.setItem("token",res.data.jwt)
                localStorage.setItem('user',res.data.user.username)
                dispatch(setCurrentUser(res.data.user.username))
                history.push('/')
            }
        })
        .catch((err) => {
            console.log(err)
            setError("some error")
        })
    }
    return (
       <Form>
           <Form.Group>
               <Form.Label>Username or Email</Form.Label>
               <Form.Control type="text" placeholder="Enter your username or email" name="identifier" value={user} onChange={handleChangeUser}/>
           </Form.Group>
           <Form.Group>
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Enter your username or email" name="password" value={password} onChange={handleChangePassword}/>
           </Form.Group>
           <Button variant="primary" onClick={onSubmit}>Submit</Button>
           <span>{error}</span>
           <div>Don't have an account ? <Link to="/register">register here</Link></div>
       </Form>
    )
}
export default FormLogin;