import React from 'react'
import Nav from './Nav';
import Dashboard from './Dashboard';
import Container from './Container';
import Lecture from './Lecture';
// import Logout from './Logout';



export default function ParentsContainer() {
  return (
    <div className='exemple'>
       <Nav/>
       <Dashboard/>
       <Container/>
       {/* <Lecture/> */}
       {/* <Logout/> */}
    </div>
  )
}





