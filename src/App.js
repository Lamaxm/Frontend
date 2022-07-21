import './App.css';
import { BrowserRouter as Router,Routes, Route ,Link} from 'react-router-dom';
import Home from './component/Home';
import Subject from './component/subject';
import MyCats from './component/MyCats';
import Adoption from './component/Adoption';
import GoogleMap from './component/GoogleMap';
import Register from './component/register';
import { useState } from 'react';
import Sale from './component/sale';


function App() {

  const[isloggin , setIsloggin] = useState(false)
  const[username , setUsername] = useState('')

  const logoutfun=()=>{
    setIsloggin(false)
    setUsername('')
  }
//margin-left: 760px;
  return (
    <div className="App">
       
    <Router>
    <nav className='navbar'>
        <div className='container2'>
          <h3 className='logo'>Cats</h3>
          <ul className='nav-links'>
            <Link to='/' className='Linkclass'
            setIsloggin={setIsloggin}
            setUsername={setUsername}
            isloggin={isloggin} > <li>الصفحة الرئيسية</li> </Link>
            <Link to='/MyCats' className='Linkclass'> <li>قططي</li> </Link>
            <Link to='/Adoption' className='Linkclass'> <li>قطط معروضة للتبني</li> </Link>
            <Link to='/Sale' className='Linkclass'> <li>اغراض مستعملة</li> </Link>
            {isloggin
               ? <img src={process.env.PUBLIC_URL + '/in.png' } alt="bug" height={50} onClick={logoutfun}/>
               : <img src={process.env.PUBLIC_URL + '/out.png'}  alt="bug" height={50} onClick={logoutfun} />
      }
          </ul>
        </div>
    </nav>
      <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/Register" element={<Register />}></Route>
      <Route exact path="/Subject" element={<Subject />}></Route>
      <Route exact path="/MyCats" element={<MyCats />}></Route>
      <Route exact path="/Adoption" element={<Adoption />}></Route>
      <Route exact path="/GoogleMap" element={<GoogleMap />}></Route>
      <Route exact path="/Sale" element={<Sale/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
