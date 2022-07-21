import React ,{useEffect , useState}from 'react'
import axios from 'axios'
import {Card , Button} from 'react-bootstrap';
import CardData from './CardData';
import ModelPage from './model';
import Aos from 'aos';
import 'aos/dist/aos.css'


function Adoption() {

    const [openmodel,setOpenmodel]=useState(false)
    const [data,setData]=useState([])
  useEffect(() => {
    Aos.init({duration:2000});
    axios.get('https://62d4b78ecd960e45d45acb42.mockapi.io/cats')
    .then((res)=>{
      setData(res.data)
      console.log(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })

  }, [])

  return (
    <div className='Home'>
        <button  className='btnmodel'
        onClick={()=>{
            setOpenmodel(true);
        }} style={{ color: 'gray'}}> اضف قط جديد</button>
         <div className='Adoption'>
         {CardData.map((index)=>
        <Card style={{ width: '18rem' ,background: 'white' }} data-aos="flip-right">
        <Card.Img variant="top" src={index.photo} style={{ width: '18rem' }} />
        <Card.Body>
          <Card.Title style={{ margin:'20px'}}>{index.name}</Card.Title>
          <Card.Text style={{ margin:'20px'}}>
          {index.description}
          </Card.Text>
          
        </Card.Body>
      </Card>
      )}
        {openmodel&&<ModelPage closeModel={setOpenmodel} />}
    </div>
    </div>
  )
}

export default Adoption