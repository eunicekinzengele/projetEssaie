import React from "react";
import '../Styles/container.css';
// import Image from '../Images/sisters.png'; 
import {useParams} from "react-router-dom";
import SingleVideo from './SingleVideo';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ParentsContainersLecture from "./ParentsContainersLecture";



function Container(){
    const clientId ="129788055226-glev0dl084clkeph94jhapm27uhc8tck.apps.googleusercontent.com";

    const key ="AIzaSyB54oBHFCv-NoZwc6oAf8T56HXA2xNlIjo";
    const [video, setVideo]= useState([])
    const params = useParams()
    const storage= localStorage.getItem('token')
    const fechUrl= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=21&regionCode=US&key=${key}`
    
    useEffect(() => {
        fetch(fechUrl)
          .then((response) => response.json())
          .then((data) => setVideo(data.items));
      }, []);
      console.log(video);

    return(
        <div className="div__container">
            <div className="row">
                {video.map((item,id)=>{
                    return(
                    <div className="videos__emplacement" /* key={item.id} */>
                    
                        {/* <link to={`/ParentsContainersLecture/${item.id}`} key={id}> */}
                        <img src={item.snippet.thumbnails.medium.url}/>
                        {/* </link> */}
                        <p className="title__video">{item.snippet.title}</p>
                    </div>
                    )
                } 
                )}
            </div>
            
        </div>

    )
}




export default Container;