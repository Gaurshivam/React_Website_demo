import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div className='nav'>
    <div className="logopart">
        <img className='Image'
         src="https://th.bing.com/th?id=OIP.ffo62R8xddGbxjoQcXaa_AHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
         alt="logoimage" />
    </div>
    <div className="servicespart">
        <a href="www.google.com">Plateform</a>
        <a href="www.google.com">Plans</a>
        <a href="www.google.com">Enterprise</a>
        <a href="www.google.com">Resources</a>
        <a href="www.google.com">Education</a>
    </div>
    <div className="login">
        <a href="www.google.com">Contact Us</a>
        <a href="www.google.com">Log In</a>
        <button className='signUp'>Sign Up</button>
    </div>
    </div>
  );
}

export default Header;