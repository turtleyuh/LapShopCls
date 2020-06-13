import React from 'react';


function SignupScreen(props){
	return <div className="signup-form">
		<form action="">
		<ul className="form-container">
			<li>
				<h1>Sign up</h1>
			</li>
			<li>
				<label>Email</label>
				<input type="email" name="email" id="email" placeholder="huy6mui@gmail.com" />
			</li>
			<li>
				<label>Full name</label>
				<input type="text" name="name" id="name" placeholder="Nguyen Hoang Gia Huy" />
			</li>
			<li>
				<label>Phone number</label>
				<input type="number" name="phone" id="phone" placeholder="0981 870 xxx" />
			</li>
			<li>
				<label>Password</label>
				<input type="password" name="password" id="password" placeholder="Password.." />
			</li>
			<li>
				<label>re-Password</label>
				<input type="password" name="password" id="password" placeholder="Re-Password.." />
			</li>
			<li>
				<button className="button primary" type="submit">Sign up</button>
			</li>
			</ul>
			</form>
			</div>
}
export default SignupScreen;