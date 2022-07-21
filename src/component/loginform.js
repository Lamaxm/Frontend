import React, { useState , useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from "axios";
import {Link} from 'react-router-dom';



function Loginform(props) {
    let left1 = getComputedStyle(document.documentElement).getPropertyValue('--left1')

    const login = () =>{
        const left1 = '0'
        document.documentElement.style.setProperty('--left1' , left1);

    }

    useEffect(()=>{

        const left1 = '0'
        document.documentElement.style.setProperty('--left1' , left1);
        
        Aos.init({duration:1000});
    },[])

    const [username ,setUsername]=useState('')
    const [password ,setPassword]=useState('')

    const loginfun=()=>{
        axios.post('https://62d4b78ecd960e45d45acb42.mockapi.io/register',username , password)
        .then((res)=>{
            console.log(res.data)
            props.setIsloggin(true);
            props.setUsername(res.data.username)
          })
          .catch((err)=>{
            console.log(err)
          })
    }
  return (
    <div><div className='button-box'>
      
    <div className='btn'>

    </div>
    <button type='button' className='login-btn'>login</button>
    <button type='button' className='login-btn' ><Link to='/Register' className='homeLinkclass'>register</Link></button>
</div>

<p className='welcome'><strong> W E L C O M E</strong> </p>
<input type={'text'} className='Input' 
onChange={(e)=>{setUsername(e.target.value);}}
value={username}
placeholder='enter username please' ></input>
<input type={'password'} className='Input'
onChange={(e)=>{setPassword(e.target.value);}}
value={password} 
placeholder='enter password please'></input>
<button className='ButHome' onClick={loginfun}>Login</button></div>
  )
}

export default Loginform