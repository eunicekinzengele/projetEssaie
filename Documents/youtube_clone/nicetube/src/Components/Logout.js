import React, { useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import '../Styles/logout.css';
import { gapi, loadAuth2 } from "gapi-script";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const nav = useNavigate()
    const clientId = " 202009839663-v5f9j4a2vjcttqrsabr11mjhljrn48a1.apps.googleusercontent.com";

  useEffect(() => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(gapi, clientId, 'https://www.googleapis.com/auth/youtube.force-ssl')
      if (auth2.isSignedIn.get()) {
          // console.log(auth2.currentUser.get())
      }
    }
    setAuth2();
  }, []);
      const signOut = () => {
        const auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
          nav('/')
          console.log('User signed out.');
          window.localStorage.removeItem('token')
        });
      }
    return (
      <>
        <div id="btn-logout" onClick={signOut}>Sign out</div>
      </>
    )
  }


export default Logout;