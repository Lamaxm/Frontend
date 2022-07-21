import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import Aos from 'aos';

function ModelPage({closeModel}) {

    const [name,setName]=useState('')
    const [photo,setPhoto]=useState('')
    const [description,setDescription]=useState('')

    
    useEffect(() => {
        Aos.init({duration:1000});
    
      }, [])

      function handleSubmit(event){
        event.preventDefault();
        axios.post('https://62d4b78ecd960e45d45acb42.mockapi.io/cats',{name , photo, description})
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      }

  return (
    <div className="modalBackground" data-aos="fade-up">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
                closeModel(false);
            }}
          >
            X
          </button>
        </div>
        <div className="body">
          <form onSubmit={handleSubmit}>
           <input type='text'onChange={(e)=>setName(e.target.value)} className='inputmodel'></input>
           <br/>
           <input type='text'onChange={(e)=>setDescription(e.target.value)} className='inputmodel'></input>
           <br/>
           <input type='file' onChange={(e)=>setPhoto(e.target.files[0])} className='inputmodel'></input>
           <div className="footer">
            <input type="submit" />
          </div>
         </form>
        </div>
      </div>
    </div>
  )
}

export default ModelPage