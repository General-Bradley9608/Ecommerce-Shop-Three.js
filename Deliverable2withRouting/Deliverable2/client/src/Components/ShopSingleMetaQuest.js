import React, {useContext,useState} from 'react'
import EmailContext from './EmailContext';
import axios from 'axios';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


export default function ShopSingleMetaQuest() {
  const [quantity, setQuantity] = useState(1);
  const [metaID, setMetaID] = useState("05");
  const emailContext = useContext(EmailContext);
  

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
    return false;
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    return false;
  };

  function handleClick() {
    const newWindow = window.open('http://localhost:3000/MetaQuestModel', '_blank');
  }

  async function triggerEndPoint(e){
    
    e.preventDefault();
    
    try{
        await axios.post("http://localhost:3001/AddToCart",{
            email: emailContext.email,
            quantity:quantity,
            ID: metaID
        })
        .then(res=>{
          if(res.data == "ADDED")
          {
              alert("ADDED TO CART")
          }
          else if(res.data == "FAILED"){
              alert("ADD TO CART FAILED")
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
};



  return (
    <>
      <div>
      {/* Modal */}
        <div className="modal fade bg-white" id="templatemo_search" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="" method="get" className="modal-content modal-body border-0 p-0">
              <div className="input-group mb-2">
                <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                <button type="submit" className="input-group-text bg-success text-light">
                  <i className="fa fa-fw fa-search text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

      {/* Open Content */}

      <section className="bg-light" style={{ display: "flex" }}>
        <div className="container pb-5" >
          <div className="row">
            <div className="col-lg-5 mt-5">
              <div className="card mb-3">
                <img className="card-img img-fluid" src="assets/img/vr.jpg" alt="Card image cap" id="product-detail" />
              </div>
              <div className="row">
                {/* Start Controls */}
                <div className="col-1 align-self-center">
                  <a href="#multi-item-example" role="button" data-bs-slide="prev">
                    <i className="text-dark fas fa-chevron-left"></i>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>


      {/* End Controls */}

      {/* Start Carousel Wrapper */}
     
      <div id="multi-item-example" className="col-10 carousel slide carousel-multi-item" data-bs-ride="carousel" >
        {/* Start Slides */}
        <div className="carousel-inner product-links-wap" role="listbox">
          
          {/* First slide */}
          <div className="carousel-item active">
            <div className="row">
              <div className="col-4">
                  <img className="card-img img-fluid" src="assets/img/vr1.jpg" alt="Product Image 1" />
              </div>
              <div className="col-4">
                  <img className="card-img img-fluid" src="assets/img/vr2.jpg" alt="Product Image 2" />
              </div>
              <div className="col-4">
                  <img className="card-img img-fluid" src="assets/img/vr3.jpg" alt="Product Image 3" />
              </div>
            </div>
          </div>
          {/*/.First slide*/}

        </div>
        
        {/* End Slides */}
      </div>
      <div className="col-1 align-self-center">
      <a href="#multi-item-example" role="button" data-bs-slide="next">
        <i class="text-dark fas fa-chevron-right"></i>
        <span className="sr-only">Next</span>
      </a>
    </div>
    </div>
    </div>
    <div className="col-lg-7 mt-5" style={{ width: "50%"}}>
      <div className="card">
        <div className="card-body">
          <h1 className="h2">Meta Quest 2</h1>
          <p className="h3 py-2">Rs.100,000</p>
          <p className="py-2">
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-warning"></i>
            <i className="fa fa-star text-secondary"></i>
            <i className="fa fa-star text-secondary"></i>
            <span className="list-inline-item text-dark">Rating 3.0</span>
          </p>
          <ul className="list-inline">
            <li className="list-inline-item">
              <h6>Brand:</h6>
            </li>
            <li className="list-inline-item">
              <p className="text-muted"><strong>META</strong></p>
            </li>
          </ul>

          <h6>Description:</h6>
          <p>Advanced All-In-One Virtual Reality Headset — 128 GB Get Meta Quest 2 with GOLF+ and Space Pirate Trainer DX included</p>

          <h6>Specification:</h6>
          <ul className="list-unstyled pb-3">
            <li>1.83 pounds</li>
            <li> 2 Touch Controllers (L&R)</li>
            <li> Quick Start Guide, Power Adapter </li>
            <li> Glass Spacer, 2 AA Batteries (L&R)</li>
          </ul>


          <form action="" method="GET">
            <div className="row">
              <div className="col-auto">
              <div>
          <button type="button" onClick={decreaseQuantity} className="quantity-button">
            -
          </button>
          <input type="text" value={quantity} readOnly />
          <button type="button" onClick={increaseQuantity} className="quantity-button">
            +
          </button>
        </div>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col d-grid">
                <button type="button"  onClick={handleClick} className="btn btn-success btn-lg">View in 3D</button>
              </div>
              <div className="col d-grid">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={triggerEndPoint}
                >
                  Add To Cart
                </button>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>



</div>
</div>
</section>

    <section className="py-5">
      <div className="container">
        <div className="row text-left p-2 pb-3">
          <h4>Related Products</h4>
        </div>

        {/* Start Carousel Wrapper */}
        <div id="carousel-related-product"style={{ display: "flex" }} >
          <div className="p-2 pb-3" style={{ flex: 1 }} >
            <div className="product-wap card rounded-0">
              <div className="card rounded-0">
                <img className="card-img rounded-0 img-fluid" src="assets/img/shop_08.jpg" alt="Product image" />
              </div>
              <div className="card-body">
                <Link to="/ShopSingleMi" className="h3 text-decoration-none">Xiaomi MI 10T Lite</Link>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p className="text-center mb-0">Rs. 80,000</p>
              </div>
            </div>
          </div>


          <div className="p-2 pb-3" style={{ flex: 1 }} >
            <div className="product-wap card rounded-0">
              <div className="card rounded-0">
                <img className="card-img rounded-0 img-fluid" src="assets/img/shop_10.jpg" alt="Product image" />
              </div>
              <div className="card-body">
                <Link to="/ShopSingleGalaxy" className="h3 text-decoration-none">Samsung Galaxy A21</Link>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p className="text-center mb-0">Rs. 34,999</p>
              </div>
            </div>
          </div>

          <div className="p-2 pb-3" style={{ flex: 1 }} >
            <div className="product-wap card rounded-0">
              <div className="card rounded-0">
                <img className="card-img rounded-0 img-fluid" src="assets/img/shop_09.jpg" alt="Product image" />
              </div>
              <div className="card-body">
                <Link to="/ShopSinglePixel" className="h3 text-decoration-none">Google Pixel 4 XL</Link>
                <ul className="list-unstyled d-flex justify-content-center mb-1">
                  <li>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>
                    <i className="text-warning fa fa-star"></i>                 
                    <i className="text-muted fa fa-star"></i>
                  </li>
                </ul>
                <p className="text-center mb-0">Rs. 74,000</p>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </section>
  </div>
</>
  )
}
