import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className="rocket">
     <img src="https://th.bing.com/th/id/OIP.Xt9B-b6d71qM_ydA_8h2eQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="alt" />
     <h2>2,500</h2>
     <p>Enterprise users organizations successfully launched</p>
     </div>
     <div className="rocket1">
     <img src="https://th.bing.com/th/id/OIP.vsDkDYN9PdcprUwNn7RW7QAAAA?w=152&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="alt" />
     <h2>45,000</h2>
     <p>Enterprise users onboarded seemlessly</p>
     </div>
     <div className="rocket2">
     <img src="https://th.bing.com/th/id/OIP.gc6OWu2wGXZtLiMNRf0wUQHaFF?w=301&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="alt" />
     <h2>200,000+</h2>
     <p>Professional trained on product and strategy</p>
     </div>
    </div>
  );
}

export default Footer;
