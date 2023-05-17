const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const MongoDBStore = require('connect-mongodb-session')(session);


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser());



const store = new MongoDBStore({
  uri: 'mongodb+srv://sohaib:12345@cluster0.fxao1sa.mongodb.net/?retryWrites=true&w=majority',
  collection: 'sessions'
});


mongoose.connect("mongodb+srv://sohaib:12345@cluster0.fxao1sa.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to DB"))
.catch(console.error);

const db = require('./models/database.js');
const cart = require('./models/items.js');
const finalorder = require('./models/finalorder.js');



const crypto = require('crypto');

// Generate a random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

app.use(session({
  secret: secretKey,
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000 // 1 week in milliseconds
  }
}));


app.get('/',cors(),(req,res) => {
    
});



app.post('/Login',async(req,res) => {

  const email = req.body.email
  const password = req.body.password

  console.log(req.body);

    try{
   // Find the user in MongoDB by email
    const check = await db.findOne({email:email})
    
    if (!check) {
      // If the user doesn't exist, return "NOTEXIST"
      console.log("first");
      return res.json("NOTEXIST");
    }

    // Check if the password is correct
    if (check.password !== password) {
      // If the password is incorrect, return an error message
      return res.json("INCORRECT_PASSWORD");
    }

    console.log(check.username);
    // If the email and password are correct, return the username along with the response

    req.session.user = {
      email: email,
      username: check.username
    };
    console.log("inside login " + req.session.user.email);
    console.log("inside login " + req.session.user.username);

   // return res.json(check.username);
    return res.json(req.session.user);
  
  }
  catch(e){
    res.json("catcherrorloginserver")
  }

});


app.get('/logout', (req, res) => {
  // Destroy the session
  req.session.destroy((err) => {
    if (err) {
      console.log('Error destroying session:', err);
      return res.json('ERROR');
    }
    // Redirect or respond with a success message
    console.log('Session destroyed successfully');
    res.json('LOGGED_OUT');
  });
});




app.post('/Signup',async(req,res) => {

  
  const username = req.body.username
  const email = req.body.email
  const password = req.body.password 

  
  const data = {
    username:username,
    email:email,
    password:password
  }
  
  try{
    const check = await db.findOne({email:email})
    if(check)
    {
      res.json("EXIST")
    }
    else
    {
      res.json("NOTEXIST")
      await db.insertMany([data])
    }  
  }
  catch(e){
    res.json("catcherrorsignupserver")
  }


});


app.post('/AddToCart',async(req,res) => {

  console.log("here");
  
  try {
    const email = req.body.email;
    const quantity = req.body.quantity;
    const ID = req.body.ID;

    // Search for the document that matches the email and ID
    let item = await cart.findOne({ email: email, ID: ID });

    // If the document exists, update the quantity
    if (item) {
      item.quantity += quantity;
      await item.save();
    } else {
      // Otherwise, create a new document
      item = new cart({
        email: email,
        quantity: quantity,
        ID: ID
      });
      await item.save();
    }
    res.send('ADDED');
  } catch (err) {
    console.error(err);
    res.send('FAILED');
  }


});

app.post('/ViewCart',async(req,res) => {

  console.log("viewing cart");

  const email = req.body.email;

  try {
    // Find all items in the cart collection for the given email
    const items = await cart.find({ email });

    // Return the items as a response
    res.send(items);
  } catch (error) {
    console.error(error);
    res.send("ERROR");
  }

   

});

app.post('/Subtractqtycart',async(req,res) => {

    const email = req.body.email;
    const id = req.body.ID;
    
    console.log(req.body.email);
    console.log(req.body.ID);
    console.log("decreasing qty");
    
     
    // Find the user's cart
    let userCart = await cart.findOne({ email: email, ID: id });
    
   // console.log(userCart);
    if(userCart.quantity === 1)
    {
          userCart.deleteOne({email:email,ID:id});          
    }
    else
    {
        userCart.quantity -= 1;
    }
    userCart.save();
    res.send("SUCCESS");
  
  
});


app.post('/Addqtycart', async(req, res) => {
  
  const email = req.body.email;
  const id = req.body.ID;
  
  console.log(req.body.email);
  console.log(req.body.ID);
  console.log("adding qty");
  
     
    // Find the user's cart
    let userCart = await cart.findOne({ email: email, ID: id });
    
   // console.log(userCart);
    userCart.quantity += 1;
    userCart.save();

    res.send("SUCCESS");
    
});

app.post('/CompleteCheckout', async(req, res) => {
  
  const email = req.body.email;
  const fullname = req.body.fullname; 
  const homeaddress = req.body.homeaddress;
  const contactnumber = req.body.contactnumber;
  const items = req.body.items;
  
  console.log(req.body);

  const myorder = new finalorder({
    email,
    fullname,
    homeaddress,
    contactnumber,
    items
  });


  try {
    await myorder.save();
    res.send("SUCCESS");
  } catch (err) {
    console.error(err);
    res.send("Server Error");
  }

});

app.get('/orders', async (req, res) => {
  try {
    const orders = await finalorder.find();
    res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/deletecartrecord',async(req,res) => {
    

  const response = await cart.deleteOne({ email: req.body.email });
  if (response.deletedCount === 0) {
    console.log("No records deleted");
  } else {
    console.log(`${response.deletedCount} records deleted`);
  }
});




app.listen(3001, () => console.log("Server started on port 3001"));
