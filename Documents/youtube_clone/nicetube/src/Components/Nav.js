import React from 'react';
import '../Styles/nav.css';
import image from '../Images/logo.png';
import Logout from './Logout';


function Nav(){

    return( 
        <div className='div__nav'>
             <img className='img__logo' src={image}/>

             <ul>
                 <li className='input__search'><input type="text" placeholder='rechercher la vidéo'/></li>
                 <li><a href='#'>Tous</a></li>
                 <li><a href='#'>Abonnement</a></li>
                 <li><a href='#'>Bibliothèque</a></li>
            
             </ul>
        </div>
       
    )   
    
}


export default Nav;