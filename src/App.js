import './App.css';
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
function App() {
  const [pic,setPic]=useState("");
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    Hi,I am Biswajit Ghosh&nbsp;&nbsp;
    <img src={pic} alt="pic" style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
    <GoogleOAuthProvider clientId="524025551006-t4fhvf3hj02cqgqilp8492muc4usd8sc.apps.googleusercontent.com">
    <GoogleLogin
  onSuccess={credentialResponse => {
    var decoded = jwt_decode(credentialResponse.credential);
    console.log(decoded);
    setPic(decoded.picture);
    console.log(pic)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
    </GoogleOAuthProvider>
    </div>
  );
}

export default App;
