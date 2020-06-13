import React from 'react';
import {Link, Route} from 'react-router-dom';



function CartScreen(props){
	return <div className="cart">
		<div className="cart-field">
			<i className="fas fa-shopping-cart"></i>
		<div>
			<h1>It seems your cart is empty.</h1>
		</div>
		<div>Click <Link to="/">here</Link> to browse some.</div>
		</div>
	</div>
}
export default CartScreen;