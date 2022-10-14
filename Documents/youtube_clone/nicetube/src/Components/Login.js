import React, { useEffect } from "react";
import '../Styles/connexion.css';
import Image from '../Images/logo_NiceTube.png'; 
import { FcGoogle } from "react-icons/fc";
import { gapi, loadAuth2 } from 'gapi-script';
import { useParams , Link} from "react-router-dom";
import Parents__container from './ParentsContainer'





function Login(){
    const clientId ="202009839663-v5f9j4a2vjcttqrsabr11mjhljrn48a1.apps.googleusercontent.com";


    
    useEffect(() => {
        const setAuth2 = async () => {
          const auth2 = await loadAuth2(
            gapi,
            clientId,
            "https://www.googleapis.com/auth/youtube.force-ssl"
          );
          if (auth2.isSignedIn.get()) {
            //auth2.signOut();
            updateUser(auth2.currentUser.get());
          } else {
            attachSignin(document.getElementById("started"), auth2);
          }
        };
        setAuth2();
    }, []);
    const attachSignin = (element, auth2) => {
      auth2.attachClickHandler(
        element,
        {},
        (googleUser) => {
          updateUser(googleUser);
        },
        (error) => {
          console.log(JSON.stringify(error));
        }
      );
    };
    const updateUser = (user) => {
        console.log(user.xc.access_token);
        localStorage.setItem("token", user.xc.access_token);
        // Navigate("/userAuth");
      };

    //   routes ici

    // const params = useParams()
    // console.log(params);



    return(

        <div className="connexion_space">
           {/* <div
        id="started"
        className="btn btn-danger d-block text-center"
      >
        Sign in with Google
      </div> */}

            <div className="general">
                <img className="logo__connexion" src={Image}/>
                <p>Sign in with</p>
                  <Link to="/Parentscontainer">
                    <button  id="started"
                      className="btn btn-danger d-block text-center"><FcGoogle/>         Google
                      </button>
                  </Link>
            </div>
        </div>
    )

}

export default Login;