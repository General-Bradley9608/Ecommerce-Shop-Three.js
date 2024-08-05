import React from 'react'


export default function About() {
    return (
        <div>
      <section className="bg-success py-5">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-md-8 text-white">
              <h1>About Us</h1>
              <p>
                Welcome to Get It Now, where we strive to provide the best in class electronic products to our customers. The best user experience with 3D view of our Product.
              </p>
              <p>
                Our extensive range of electronics includes everything from smartphones, laptops, tablets, gaming consoles, to home appliances, and accessories.
                We understand the importance of staying up-to-date with the latest technology trends,
                and that's why we constantly update our inventory to ensure that we offer our customers the newest and most innovative electronic products.
                Our team of experts carefully handpicks each product, ensuring that we only sell high-quality, genuine electronics from reputable brands.
              </p>
            </div>
            <div className="col-md-4">
              <img src="assets/img/about-hero.svg" alt="About Hero" />
            </div>
          </div>
        </div>
      </section>
<section className="container py-5">
      <div className="row text-center pt-5 pb-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Our Services</h1>
          <p>
            We are committed to providing you with exceptional services and ensuring that you have a hassle-free experience with us.
            Here are some of the services that we offer:
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i class="fa fa-truck fa-lg"></i></div>
            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i class="fas fa-exchange-alt"></i></div>
            <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i class="fa fa-percent"></i></div>
            <h2 className="h5 mt-4 text-center">Promotion</h2>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 pb-5">
          <div className="h-100 py-5 services-icon-wap shadow">
            <div className="h1 text-success text-center"><i class="fa fa-user"></i></div>
            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-light py-5">
      <div className="container my-4">
        <div className="row text-center py-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Our Brands</h1>
            <p>
              At our electronics website, we pride ourselves on offering a wide range
              of high-quality products from some of the most reputable brands in the electronics industry.
            </p>
          </div>
          <div className="col-lg-9 m-auto tempaltemo-carousel">
            <div className="row d-flex flex-row">
              {/* Controls */}
              <div className="col-1 align-self-center">
                <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                  <i className="text-light fas fa-chevron-left"></i>
                </a>
              </div>
              {/* End Controls */}

              {/* Carousel Wrapper */}
              <div className="col">
                <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                  {/* Slides */}
                  <div className="carousel-inner product-links-wap" role="listbox">

                    {/* First slide */}
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/>
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/>
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/>
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/>
                        </div>
                      </div>
                    </div>
                    {/* End First slide */}

                    {/* Second slide */}
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo"/>
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo"/>
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo"/>
                        </div>
                        <div className="col-3 p-md-5">
                          <img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo"/>
                        </div>
                      </div>
                    </div>
                    {/* End Second slide */}

                    </div>
                            </div>
                        </div>

                        <div class="col-1 align-self-center">
                            <a class="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                                <i className="text-light fas fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
    );
  }