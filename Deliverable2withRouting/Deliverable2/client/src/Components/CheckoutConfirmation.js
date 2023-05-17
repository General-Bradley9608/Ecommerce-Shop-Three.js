import './CheckoutConfirmation.css';
import EmailContext from './EmailContext';
import React, {useContext,useEffect,useState} from 'react'
import axios from 'axios';


export default function CheckoutConfirmation() {

  const emailContext = useContext(EmailContext);
  
  useEffect(() => {
    console.log(emailContext.email);
    deletecart();
},[]);

const deletecart = async (e) => {
  try{
    const response = await axios.post("http://localhost:3001/deletecartrecord",
    {
        email: emailContext.email,
    });
    if (response.data === "ERROR") 
    {
      console.log("failed");
    } 
    else 
    {
      console.log("shukr");
    }
  }catch(e)
  {
    console.log(e);
  }

}
 

  return (
    <div className="checkout-confirmation">
      <div className="tick">&#10004;</div>
      <h2>Order Confirmed</h2>
      <p>Thank you for your purchase!</p>
    </div>
  );
};