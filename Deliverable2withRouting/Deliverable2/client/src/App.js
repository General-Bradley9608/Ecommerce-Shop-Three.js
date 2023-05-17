import Footer from './Components/Footer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import About from './Components/About'
import Contact from './Components/Contact';
import ShopSinglePixel from './Components/ShopSinglePixel';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ShopSingleGalaxy from './Components/ShopSingleGalaxy';
import ShopSingleMi from './Components/ShopSingleMi';
import ShopSingleNova from './Components/ShopSingleNova';
import  Login from './Components/Login';
import  Signup from './Components/Signup';
import { useState } from 'react';
import ShopSmartWatches from './Components/ShopSmartWatches';
import ShopVRHeadsets from './Components/ShopVRHeadsets';
import Nova3iModel from './Components/Nova3iModel';
import ShopSingleMetaQuest from './Components/ShopSingleMetaQuest';
import ShopSingleGalaxyWatch from './Components/ShopSingleGalaxyWatch';
import GalaxyPhoneModel from './Components/GalaxyPhoneModel';
import Mi10TModel from './Components/Mi10TModel';
import PixelModel from './Components/PixelModel';
import GalaxyWatchModel from './Components/GalaxyWatchModel';
import MetaQuestModel from './Components/MetaQuestModel';
import Cart from './Components/Cart';
import EmailContext from './Components/EmailContext';
import CheckoutForm from './Components/CheckoutForm';
import CheckoutConfirmation from './Components/CheckoutConfirmation';
import AdminProductList from './Components/AdminProductList';
import CartContext from './Components/CartContext';


function App() {

  const [email,setEmail] = useState(null);
  const [username,setUsername] = useState(null);
  
  return (
    <EmailContext.Provider value={{email,setEmail,username,setUsername}}>

    <Switch>
      
      <Route exact path = "/Nova3iModel">
        <Nova3iModel/>
      </Route>
      <Route exact path = "/GalaxyPhoneModel">
        <GalaxyPhoneModel/>
      </Route>
      <Route exact path = "/PixelModel">
        <PixelModel/>
      </Route>
      <Route exact path = "/Mi10TModel">
        <Mi10TModel/>
      </Route>
      <Route exact path = "/GalaxyWatchModel">
        <GalaxyWatchModel/>
      </Route>
      <Route exact path = "/MetaQuestModel">
        <MetaQuestModel/>
      </Route>
      
      <Route exact path = "/HomePage">
        <Header/>
        <HomePage/>
        <Footer/>
      </Route>
      <Route exact path = "/">
        <Header/>
        <HomePage/>
        <Footer/>
      </Route>
      <Route exact path = "/Login">
        <Header/>
        <Login/>
        <Footer/>
      </Route>
      <Route exact path = "/Signup">
        <Header/>
        <Signup/>
        <Footer/>
      </Route>
      <Route exact path = "/About">
        <Header/>
        <About/>
        <Footer/>
      </Route>
      <Route exact path = "/Shop">
        <Header/>
        <Shop/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSmartWatches">
        <Header/>
        <ShopSmartWatches/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopVRHeadsets">
        <Header/>
        <ShopVRHeadsets/>
        <Footer/>
      </Route>
      <Route exact path = "/Contact">
        <Header/>
        <Contact/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSinglePixel">
        <Header/>
        <ShopSinglePixel/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSingleNova">
        <Header/>
        <ShopSingleNova/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSingleMi">
        <Header/>
        <ShopSingleMi/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSingleGalaxy">
        <Header/>
        <ShopSingleGalaxy/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSingleMetaQuest">
        <Header/>
        <ShopSingleMetaQuest/>
        <Footer/>
      </Route>
      <Route exact path = "/ShopSingleGalaxyWatch">
        <Header/>
        <ShopSingleGalaxyWatch/>
        <Footer/>
      </Route>

        <Route exact path = "/Cart">
        <Header/>
        <Cart/>
        <Footer/>
        </Route>
      
      <Route exact path = "/CheckoutForm">
        <Header/>
        <CheckoutForm/>
        <Footer/>
      </Route>
      
      <Route exact path = "/CheckoutConfirmation">
        <Header/>
        <CheckoutConfirmation/>
        <Footer/>
      </Route>

      <Route exact path = "/AdminProductList">
        <Header/>
        <AdminProductList/>
        <Footer/>
      </Route>

    
    </Switch>
    
    </EmailContext.Provider>
  );
}

export default App;
