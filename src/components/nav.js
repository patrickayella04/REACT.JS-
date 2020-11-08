
import React, { useState } from 'react';
import { Link } from 'react-router-dom';






function Nav() {
    const[open, setOpen] = useState(false)

    return (
      
   
    <nav className="nav-area">
        <div className="logo">See it believe it</div> 
            <ul className="nav-links"style={{ transform: open ? "translateX(0px)" : "" }}>
            <Link onClick={() => setOpen(!open)} to='/' >
                <li>Home</li>
                </Link>
                <Link onClick={() => setOpen(!open)} to='/about'>
                <li>About</li>
                </Link>
                <Link >
                <li className="no-border">Contact</li>
                </Link>               
            </ul> 

            <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
            
            </nav>
        
  );
}

export default Nav;