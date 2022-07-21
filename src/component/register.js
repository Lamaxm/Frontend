import React, { useState , useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from "axios";
import {Link} from 'react-router-dom';

function Register() {
    let left1 = getComputedStyle(document.documentElement).getPropertyValue('--left1')

    const register = () =>{
        const left1 = '110px'
        document.documentElement.style.setProperty('--left1' , left1);
    }

    const login = () =>{
        const left1 = '0'
        document.documentElement.style.setProperty('--left1' , left1);

    }

    useEffect(()=>{

        const left1 = '110px'
        document.documentElement.style.setProperty('--left1' , left1);

        Aos.init({duration:2000});
    },[])

    const [username ,setUsername]=useState('')
    const [password ,setPassword]=useState('')
    const [email,setEmail]=useState('')

    const registerfun=()=>{
        const newUser={
            email,
            username,
            password,
        }
        axios.post('https://62d4b78ecd960e45d45acb42.mockapi.io/register', newUser)
        .then((res)=>{
            console.log(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
    }

  return (
    <div className='Home'>
        
        <div className='ImgBx' data-aos="fade-right">
        <img src='https://ae01.alicdn.com/kf/HTB12IQMOpXXXXXZXVXXq6xXFXXXy/Diamond-embroidery-Three-small-cats-square-drill-paste-sets-for-embroidery-diamond-mosaic-crafts-kits-picture.jpg_Q90.jpg_.webp' className='MainImg'/>
        </div>
        <div className='contact' data-aos="fade-left">
            <div className='button-box'>
                <div className='btn'>

                </div>
                <button type='button' className='login-btn' ><Link to='/' className='homeLinkclass'>login</Link></button>
                <button type='button' className='login-btn' >register</button>
            </div>
            
            <div className='register'>
            <input type={'text'} className='Input'
            onChange={(e)=>{setUsername(e.target.value);}}
            value={username}
            placeholder='ادخل اسم المستخدم'></input>

            <input type={'email'} className='Input'
            onChange={(e)=>{setEmail(e.target.value);}}
            value={email}
            placeholder='ادخل الايميل'></input>

            <input type={'password'} className='Input' 
            onChange={(e)=>{setPassword(e.target.value);}}
            value={password} 
            placeholder='ادخل كلمة المرور'></input>
            <button className='ButHome' onClick={registerfun}>تسجيل</button> 
            </div>

        </div>
    </div>
  )
}

export default Register