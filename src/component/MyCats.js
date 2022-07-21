import React ,{useState , useEffect}from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Aos from 'aos';
import 'aos/dist/aos.css'
import useLocalStorage from "use-local-storage";


function MyCats() {

  const [checked, setChecked] = useState(true);

  useEffect(()=>{
    Aos.init({duration:2000});
},[])

  return (
    <div className='MyCats'>
         <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
          <Card style={{width:'18rem' ,height: '24rem' , margin: '50px',background: 'white'}} data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom">
            <Card.Img variant="top" src="https://freshpet.com/wp-content/uploads/2019/09/cat-2224201_1280.jpg" style={{ width: '18rem' }}/>
            <Card.Body>
              <Card.Title style={{ margin: '10px'}} >يوري</Card.Title>
              <Card.Text style={{ margin: '10px'}} >
                <div className='container'>
                <div className='item'>
                <strong>&nbsp;&nbsp;&nbsp;&nbsp;الطعام </strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" onClick={() => {setChecked(true);}} value={checked}/>
                <input type="checkbox" />
                <input type="checkbox" />
                </div>
                
                <div className='item'>
                <br/> <strong>&nbsp;&nbsp;&nbsp;تنظيف  <br/>الليتربوكس </strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" />
                <input type="checkbox" />
                </div>
                
                <div className='item'>
                <br/><strong>&nbsp;&nbsp;&nbsp;&nbsp;اللعب</strong>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="checkbox" className='chechbox'/>
                </div>
                </div>
        
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default MyCats