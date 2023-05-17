import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import {useContext ,useState,useEffect } from 'react';
import axios from 'axios';
import './CheckoutForm.css';
import EmailContext from './EmailContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CheckoutForm()  {
  
  const [cartItems, setCartItems] = useState([]);
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const emailContext = useContext(EmailContext);
  const history = useHistory();
   

  useEffect(() => {
    loadcart();
},[]);

const loadcart = async (e) => {
  try{
    const response = await axios.post("http://localhost:3001/ViewCart",
    {
        email: emailContext.email,
    });
    if (response.data === "ERROR") 
    {
      console.log("failed");
    } 
    else 
    {
      console.log(response.data);
      const items = response.data.map((item) => {
        let name = "";
        let price = 0;
        let imglink = "";
        switch (item.ID) {
          case "00":
            name = "Huawei Nova 3i";
            price = 41599;
            imglink = "assets/img/shop_09.jpg";
            break;
          case "01":
            name = "Samsung Galaxy A21";
            price = 34999;
            imglink = "assets/img/shop_10.jpg";
            break;
          case "02":
            name = "Xiaomi Mi 10T Lite";
            price = 80000;
            imglink = "assets/img/shop_08.jpg";
            break;
          case "03":
            name = "Google Pixel 4";
            price = 74000;
            imglink = "assets/img/product_single_09.jpg";
            break;
          case "04":
            name = "Samsung Galaxy Watch 5";
            price = 60000;
            imglink = "assets/img/watchcart.jpeg";
            break;
          case "05":
            name = "Meta Quest 2";
            price = 100000;
            imglink = "assets/img/vrcart.jpeg";
            break;
          default:
            name = "Unknown";
            price = 0;
            imglink = "";
        }
        return {
          ID: item.ID,
          name,
          quantity: item.quantity,
          price,
          imglink
        };
      });
      setCartItems(items);
      //console.log("items" + cartItems.name);
    }
  } catch (error) 
  {
    console.log(error);
  }
}

  const handleSubmit = async (e) => {
    
    //e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    //console.log('Form submitted:', { fullName, address, phoneNumber });
    //console.log(cartcontext);
    try{

      
      const newresponse = await axios.post("http://localhost:3001/CompleteCheckout", 
      {
        email: emailContext.email,
        fullname: fullName,
        homeaddress: address,
        contactnumber: phoneNumber,
        items: cartItems
      })

      if (newresponse.data === "SUCCESS") 
      {
          history.push("/CheckoutConfirmation");
          //setCartItems([]);
      } 
      else 
      {
          console.log("its 2:45 AM on 14/5/2023 and Sohaib is hungry and tired");
      }
  }catch(e){
    console.log(e);
  } 
  

  };

  return (
    <div className="checkout-form">
      <h2>Checkout Form</h2>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Payment Option:</label>
          <div>
            <input type="radio" id="cashOnDelivery" name="paymentOption" value="cashOnDelivery" checked readOnly/>
            <label htmlFor="cashOnDelivery">Cash on Delivery</label>
          </div>
        </div>
        <button type="button" onClick={handleSubmit}>Place Order</button>
    </div>
  );
};


