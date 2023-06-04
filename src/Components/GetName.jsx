import React from 'react'
import {useLocation} from 'react-router-dom';



const GetName = (props) => {
    const location = useLocation()
    const data = location.state?.place;
    console.log(data)
  return (
    <div className = 'main'>
    <h1>Area He Visited Yesterday For Marketing</h1>
    <p>{data}</p>
    </div>
  );
}

export default GetName