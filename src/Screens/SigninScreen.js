import React from 'react';
import {Link, Route} from 'react-router-dom';
import SignupScreen from './SignupScreen';


function SigninScreen(props){
	return <div className="signin-form">
		<form action="">
		<ul className="form-container">
			<li>
				<h1>Sign in</h1>
			</li>
			<li>
				<label>Email</label>
				<input type="email" name="email" id="email" placeholder="huy6mui@gmail.com" />
			</li>
			<li>
				<label>Password</label>
				<input type="password" name="password" id="password" placeholder="Password.." />
			</li>
			<li>
				<button className="button primary" type="submit">Sign in</button>
			</li>
			<li>
				Is this your first time?	
				<Link to="/signup" className="button">Sign up now.</Link>
			</li>
		</ul>
	</form>
	</div>
}
export default SigninScreen;