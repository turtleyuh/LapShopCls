import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';
import CartScreen from './Screens/CartScreen';
import data from './data';


class App extends React.Component{
 
  render(){
    return(
      <BrowserRouter>
      <div className="grid-container">
        <header className="header sticky-top">
        <div className="brand">
          <Link to="/">LapShopCls</Link>
        </div>
        <div className="header-links">
          <Link to="/cart">Cart</Link>
          <Link to="/signin">Sign in</Link>
        </div>
        </header>
        
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninScreen}/>
            <Route path="/signup" component={SignupScreen} />
            <Route path="/cart" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            
          </div>
        </main>
        <footer className="footer">
          <div>Hotline: 111 222 4444</div>
          <div>Address: 84 Huynh Khuong An Street, Ward 5, Go Vap District, Ho Chi Minh City</div>
          <div id="copyright">All right reserved.</div>
        </footer>
      </div>
      </BrowserRouter>
     );
  }
}

export default App;
