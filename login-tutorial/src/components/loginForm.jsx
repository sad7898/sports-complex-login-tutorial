import React, { useState, useEffect } from 'react';
import {Form,Col,Row,Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
const Form = (props) => {
    let [user,setUser] = useState('')
    let [password,setPassword] = useState('')
    let [error,setError] = useState({})
    let history = useHistory()
    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.password)
    }
    const onSubmit = () => {
        axios.post('https://bff-training.et.r.appspot.com/auth/login',{identifier: user,password: password})
        .then((res) => {
            if (!res) setError({error:"null response"})
            else console.log("HI")
        })
        .catch((err) => {
            setError()
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
               <Form.Control type="password" placeholder="Enter your username or email" name="password" value={password} onChange={handleChangeUser}/>
           </Form.Group>
           <Button variant="primary">Submit</Button>
       </Form>
    )
}
export default Form;