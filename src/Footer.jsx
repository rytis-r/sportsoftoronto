import "./index.css"
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

  const footerStyle = "w-full block flex flex-col flex-wrap bg-black z-50 justify-center items-center";
  const navButtonStyle = "text-lg tracking-widest block py-2 pl-3 pr-4 text-gray-200 no-underline hover:underline hover:underline-offset-4";
  
    return (
      <div id='footer'>
        <hr className='text-white' />
        <nav className={footerStyle}>
          <ul className="flex flex-col sm:flex-row p-4 p-0 m-4 m-0 flex-row md:center">
            <li>
              <Link to="/" className = {navButtonStyle}>Home</Link>
            </li>
            <li>
              <Link to="/Mapleleafs" className = {navButtonStyle}>Maple Leafs</Link>
            </li>
            <li>
              <Link to="/Bluejays" className = {navButtonStyle}>Blue Jays</Link>
            </li>
            <li>
              <Link to="/Raptors" className = {navButtonStyle}>Raptors</Link>
            </li>
            <li>
              <Link to="/Argonauts" className = {navButtonStyle}>Argonauts</Link>
            </li>
            <li>
              <Link to="/Torontofc" className = {navButtonStyle}>Toronto FC</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  
  export default Footer;