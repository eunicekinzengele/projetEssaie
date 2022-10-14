import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Container from './Components/Container';
import SingleVideo from './Components/SingleVideo';
import Lecture from './Components/Lecture';
import {Routes, Route} from "react-router-dom";

// import Connexion from './Components/Connexion';
import Login from './Components/Login';
import UseCard from './Components/UserCard';
import ParentsContainer from './Components/ParentsContainer';
import ParentsContainersLecture from './Components/ParentsContainersLecture';




function App() {
  return (
    <div className="App">
     
     {/* <Connexion/>  */} 
    {/* <Nav/> 
    <Dashboard/> */}
    {/* <Lecture/> */}
    <Routes>
         <Route path='/' element={<Login/>}></Route>
        <Route path='/ParentsContainer' element={<ParentsContainer/>}></Route>
        <Route path='/ParentsContainersLecture' element={ParentsContainersLecture}></Route>
      
    </Routes>

    </div>

    
  );
}

export default App;
