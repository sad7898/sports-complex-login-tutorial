import React, { useState, useEffect } from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios'
import BackButton from './backButton.jsx';
const Register = (props) => {
    let [user,setUser] = useState('')
    let [password,setPassword] = useState('')
    let [email,setEmail] = useState('')
    let [error,setError] = useState()
    let history = useHistory();
    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onSubmit = () => {
        axios.post("https://bff-training.et.r.appspot.com/auth/local/register", {username:user,email:email,password:password})
        .then((res) => {
            if (res) history.push('/login')
            else setError("No response from server")
        })
        .catch((err) => {
            console.log(err.response)
            setError("some error")
        })
    }
    return (
    <Form className="form-wrap">
        <BackButton variant="dark">Go back</BackButton>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter your username" name="username" value={user} onChange={handleChangeUser}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter your password" name="password" value={password} onChange={handleChangePassword}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="someone@domain.com" name="email" value={email} onChange={handleChangeEmail}/>
        </Form.Group>
        <Button variant="primary" onClick={onSubmit}>Submit</Button>
        <span>{error}</span>
    </Form>
    )
}
export default Register;