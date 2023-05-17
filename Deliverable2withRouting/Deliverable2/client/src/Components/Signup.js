import { useState,useContext } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import React from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import EmailContext from './EmailContext';
import './Signup.css';



export default function Signup() {

    const history = useHistory();
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const emailContext = useContext(EmailContext);
    

    async function submit(e){
        e.preventDefault();
        
        try{
            await axios.post("http://localhost:3001/Signup",{
                username,email,password
            })
            .then(res=>{
              if(res.data == "EXIST")
              {
                  alert("user already exists")
              }
              else if(res.data == "NOTEXIST"){
                emailContext.setEmail(email);
                emailContext.setUsername(username);
                history.push("/Homepage")
              }
          })
          .catch(e=>{
              alert("catch caught")
              console.log(e);
          })
        }
        catch(e){
            console.log(e);
        }

    }
    
  
    return (
    <>
      <div className="Signup">
        <h1>SignUp</h1>

        <form action ="POST">
            <input type='text' onChange={(e) => {setUsername(e.target.value)}} placeholder='Username' name="" id="" />
            <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' name="" id="" />
            <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name="" id="" />
            <input type='submit' onClick={submit}/>
        </form>
        
        <br/>
        <p>OR</p>
        <br/>

        <Link to="/Login">LogIn Page</Link>

      </div>
    </>
  )
}

