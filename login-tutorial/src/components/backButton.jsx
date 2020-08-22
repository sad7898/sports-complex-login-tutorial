import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
const BackButton = (props) => {
    let history = useHistory()
    const onClick = () => {
        history.goBack()
    }
    return (
        <Button onClick={onClick} {...props}>{props.children}</Button>
    )
}
export default BackButton