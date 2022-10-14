import React from "react";
import '../Styles/dashboard.css';
import { FaTable } from 'react-icons/fa';
import { BiMoviePlay} from "react-icons/bi";
import { BiMovie} from "react-icons/bi";
import { SiAudacity } from "react-icons/si";
import { RiMovieLine } from "react-icons/ri";
import Logout from "./Logout";







function Dashboard(){
    return(
        <div className="div__dashboard">  
            <ul className="list__dashboard">
                <li><a><FaTable/>   Dashboard</a></li>
                <li><a><BiMoviePlay/>   Films</a></li>
                <li><a><BiMovie/>   Séries</a></li>
                <li><a><SiAudacity/>   Chansons</a></li>
                <li><a><RiMovieLine/>   Dessin animé</a></li>
                <li><button className="btn_logout"><Logout/></button></li>
                
            </ul>
        </div>
    )
    
}

export default Dashboard;