import React from 'react';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import '../App.css';



const Home = () => {
 const [place, setplace] = useState('')


  return (
    <div className = 'main'>
        <h1>Area He Visited Yesterday For Marketing</h1>
        <input type = "text" name="place" onChange = {(e)=>setplace(e.target.value)}/>

        <br/>
        <Link className='link' to='/getName' state= {{place: place}}>Next</Link>
        
    </div>
    
  )
}

export default Home