import { useContext, useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import EmailContext from './EmailContext';
import './Login.css';

export default function Login() {
    
    const history = useHistory();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const emailContext = useContext(EmailContext);

    async function submit(e) {
      e.preventDefault();
    
      try {
        const response = await axios.post("http://localhost:3001/Login", {
          email,
          password
        });
        

        console.log("yeh response arha :" + response.data.username + response.data.email);
        if (response.data === "NOTEXIST") 
        {
          alert("User has not signed up yet");
        } 
        else if (response.data === "INCORRECT_PASSWORD") 
        {
          alert("Incorrect Password");
        } 
        else {
          // Retrieve user information from the /getUserInfo route
          //const userResponse = await axios.get("http://localhost:3001/getUserInfo");
          //console.log("user ka response"+userResponse.data);
          //const user = userResponse.data;
    
          //if (user.error) 
          //{
            //alert(user.error);
          //} 
          //else 
          //{
            if (email === "admin@gmail.com") {
              history.push("/AdminProductList");
            } 
            else 
            {
              console.log("data : " + response.data.username + "" + response.data.email);
              setUsername(response.data.username);
              emailContext.setEmail(email);
              emailContext.setUsername(response.data.username);
              history.push("/HomePage");
            }
          //}
        }
      } catch (error) {
        console.log(error);
        alert("An error occurred");
      }
    }
    
  
    return (
    <>
      <div className="login">
        <h1>Login</h1>

        <form action ="POST">
            <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' name="" id="" />
            <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name="" id="" />
            <input type='submit' onClick={submit}/>
        </form>
        
        <br/>
        <p>OR</p>
        <br/>

        <Link to="/Signup">Sign Up</Link>

      </div>
    </>
  )
}

