
import Axios from 'axios';
import React, { useState } from 'react';

export const Button = (props) => {

    const [states,setStates] = useState([10])

    return (<>
    {states.map((state) => {
        <>
        <button onClick={() => {Axios.get('http://192.168.0.16:8888/api')}}></button>
        </>
    })}
    </>)
}
