import React from 'react';
import data from '../data';
import {Link}  from 'react-router-dom';

function HomeScreen(props){
	return <div>
        <div id="carousel-current" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-current" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-current" data-slide-to="1"></li>
            <li data-target="#carousel-current" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <a href="#"><img src="https://maytinhnhapkhaugiare.com/wp-content/uploads/2020/02/primary.jpg" alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Microsoft Surface Laptop 3</h2>
                    <p>The Surface Laptop 3 hit the marks, but doesn't move much past the Surface Laptop 2.</p>
                  </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="#"><img src="https://cdn.mos.cms.futurecdn.net/A4GDK27VMnz6LtFDy9yzk.jpg" alt="second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Apple Macbook Pro (2019)</h2>
                    <p>Apple's new MacBook Pro gets a refresh, but is it enough?</p>
                  </div>
              </a>
            </div>
            <div className="carousel-item">
              <a href="#"><img src="https://photo2.tinhte.vn/data/attachment-files/2019/12/4858518_cover_home_trai_nghiem_asus_zenbook_ux334.jpg" alt="third slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h2>Asus Zenbook 13 (UX334)</h2>
                    <p>Asus updates its 13.3-inch ultraportable with a new CPU and an innovative touchpad that serves as a second screen for shortcuts and accessory apps. ...</p>
                  </div>
              </a>
            </div>
            <a className="carousel-control carousel-control-prev" href="#carousel-current" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon fontIcon" ></span>
              
            </a>
            <a className="carousel-control carousel-control-next" href="#carousel-current" role="button" data-slide="next">
              <span className="carousel-control-next-icon fontIcon"></span>
              
           </a>
          </div>
        </div>
        <ul className="products">
              {data.products.map(product =>
                <li>
                  <div className="product">
                    <Link to={"/product/" + product._id}>
                      <img className="product-image" src={product.image} alt="product" />
                      <div className="product-name">{product.name}</div>
                    </Link>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">{product.price} vnd</div>
                  </div>
                </li>
                )}
            </ul>
          </div>  
}
export default HomeScreen;