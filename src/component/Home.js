import React, { useState , useEffect } from "react"
import Aos from 'aos';
import 'aos/dist/aos.css'
import axios from "axios";
import {Link} from 'react-router-dom';

function Home(props) {
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

    const [username ,setUsername]=useState('lama')
    const [password ,setPassword]=useState('12345')

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
    <div className='Home'>
        
        <div className='ImgBx' data-aos="fade-right">
        <img src='https://ae01.alicdn.com/kf/HTB12IQMOpXXXXXZXVXXq6xXFXXXy/Diamond-embroidery-Three-small-cats-square-drill-paste-sets-for-embroidery-diamond-mosaic-crafts-kits-picture.jpg_Q90.jpg_.webp' className='MainImg'/>
        </div>
        <div className='contact' data-aos="fade-left">
            <div className='button-box'>
              
                <div className='btn'>

                </div>
                <button type='button' className='login-btn'>login</button>
                <button type='button' className='login-btn' ><Link to='/Register' className='homeLinkclass'>register</Link></button>
            </div>
           
            <p className='welcome'><strong> مــرحــبــأ</strong> </p>
            <input type={'text'} className='Input' 
            onChange={(e)=>{setUsername(e.target.value);}}
            value={username}
            placeholder='ادخل اسم المستخدم هنا' ></input>
            <input type={'password'} className='Input'
            onChange={(e)=>{setPassword(e.target.value);}}
            value={password} 
            placeholder='ادخل كلمة المرور'></input>
            <button className='ButHome' onClick={loginfun}>تسجيل الدخول</button>
            
        </div>
    </div>
  )
}

export default Home