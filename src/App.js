
//import DELETE from './components/DELETE';
import DISPLAY from './components/display.js';
import SignUp from './components/insert';
/** 
import DISPALYBYID from './components/DISPALYBYID';
import INSERT from './components/INSERT';
import UDPDATE from './components/UDPDATE';
import DELETEBYID from './components/DELETEBYID';
import Home from './components/Home';*/
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <div>   
      <h1 style={{textAlign:'center',fontSize:'50px'}}> Hi Welcome to React JS Application </h1>
        <h1>
          <a  href='/insert'> Insert </a>||
          <a href='/display'> Display </a>||
          <a href='/displaybyid'> Displaybyid  </a>||
          <a  href='/update'> Update </a>||
          <a href='/delete'> Delete </a>||
          <a href='/deletebyid'> Deletebyid</a>
        </h1>  
        
      <Router>
        <Routes>
          {/* <Route path="" element={<Navigate to="/display" />} /> */}
          
          <Route path="/display" element={<DISPLAY/>} />
          
          <Route path="/insert" element={<SignUp />} />
          {/*<Route path="/displaybyid" element={<DISPALYBYID/>} />
          <Route path="/update" element={<UDPDATE/>} />
          <Route path="/delete" element={ <DELETE />} />
          <Route path="/deletebyid" element={<DELETEBYID/>} />
          <Route path="/" element={<Home/>} />*/}
        </Routes>
      </Router>
      </div>
  );
}

export default App;
