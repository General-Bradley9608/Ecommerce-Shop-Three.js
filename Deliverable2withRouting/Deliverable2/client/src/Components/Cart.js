import React, {useContext,useEffect,useState} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import EmailContext from './EmailContext';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';
import CartContext from './CartContext';


export default function Cart(){
  
  const emailContext = useContext(EmailContext);
  const [cartItems, setCartItems] = useState([]);
  const [total,setTotal] = useState([]);
  //const cartcontext = useContext(CartContext);
  
  
    
  useEffect(() => {
      fetchCartItems();
  },[]);


  async function fetchCartItems(e){
    
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
          //console.log(response.data);
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
          //cartcontext.setCartItems(items);
          console.log(items);
          //console.log(cartcontext);
        }
      } catch (error) 
      {
        console.log(error);
      }
    }
  
  
  
    const incrementQuantity = async (id) => {
      
      console.log("here");
      console.log(id);
      
    try{

      const response = await axios.post("http://localhost:3001/Addqtycart", 
      {
        email: emailContext.email,
        ID: id,
      })

        if (response.data === "SUCCESS") 
        {
          let updatedCartItems = [...cartItems];
          const itemIndex = updatedCartItems.findIndex((item) => item.ID === id);
          updatedCartItems[itemIndex].quantity += 1;
          setCartItems(updatedCartItems);
        } 
        else 
        {
          console.log("Failed to update quantity");
        }
    }catch(e){
      console.log(e);
    } 
    
  };

  const decrementQuantity = async (id) => {
    
    console.log("here");
    console.log(id);
    
  try{

      const response = await axios.post("http://localhost:3001/Subtractqtycart", 
      {
        email: emailContext.email,
        ID: id,
      })

      if (response.data === "SUCCESS") 
      {
        let updatedCartItems = [...cartItems];
        const itemIndex = updatedCartItems.findIndex((item) => item.ID === id);
        
        if(updatedCartItems[itemIndex].quantity > 0)
        {
          updatedCartItems[itemIndex].quantity -= 1;
        }

        if (updatedCartItems[itemIndex].quantity === 0) 
        {
          // Remove the item from the updatedCartItems array
          updatedCartItems = updatedCartItems.filter((item) => item.ID !== id);
        }
          setCartItems(updatedCartItems);
      } 
      else 
      {
        console.log("Failed to update quantity");
      }
  }catch(e){
    console.log(e);
  } 
  

  };


  const calculatetotal = () => {
    let totalCost = 0;
    cartItems.forEach(item => {
      totalCost += item.price * item.quantity;
    });
    return totalCost;
  };
   
   
  const cartStyle = {
    width: '1000px',
    height: '1200px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'auto',
    padding: '20px',
    margin: '20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' // Center items horizontally
  };



  const imgstyle = {
    width: '200px',
    height: '200px'
  };

  const quantityButtonStyle = {
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer'
  };
  
  const quantityInout = {
    width: '80px',
    height: '80px',
    border: 'none'
  };
  
  return (
    <>
     
    <div className="container">
      
      <h1>Shopping Cart</h1>

      <div className="cart" style={cartStyle}>
        
        {cartItems.map((item) => (
          
          <div className="item" key={item.ID}>
            
            <div className="image" style={imgstyle}>
              <img className="card-img img-fluid" src={item.imglink} alt=""/>
            </div>
            <div className="title">
              <p>{item.name}</p>
            </div>
            
            <div className="quantity">
              
              <button onClick={() => decrementQuantity(item.ID)} style={quantityButtonStyle}>-</button>
              
              <input type="number" min="1" value={item.quantity} onChange={() => {}} style={quantityInout} />

              <button onClick={() => incrementQuantity(item.ID)} style={quantityButtonStyle}>+</button>

            </div>
            
            <div className="price">
              <p>Rs : {item.price * item.quantity}</p>
            </div>
            
            
          </div>
        ))}
            <p>Total: Rs.{calculatetotal()}</p>
            <Link to = "/CheckoutForm"><button type="button">Check Out</button></Link>
      </div>

    </div> 
    </>
  );
};
