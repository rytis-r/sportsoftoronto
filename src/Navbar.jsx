import "./index.css"
import React from 'react';
import { useState } from "react";
import icon from '../public/favicon.ico';
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navButtonStyle = "text-lg tracking-widest block text-gray-200 font-medium no-underline md:p-6 md:border-0 md:py-6 hover:underline hover:underline-offset-4";
  const navBarTransparent = "w-full flex flex-wrap fixed transition-background duration-200 ease-in bg-transparent z-50";
  const navBarSolid = "w-full flex flex-wrap fixed transition-background duration-200 ease-in bg-black z-50";
  const navBarOpen = "visible w-full md:block md:w-full";
  const navBarClosed = "hidden w-full md:flex flex-row md:w-full items-center justify-between md:ml-4 md:mr-10 lg:ml-10 lg:mr-20";

  const scrollFunction = () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 30) {
      navbar.className = navBarSolid;
    } else {
      navbar.className = navBarTransparent;
    }
  }

  window.addEventListener('scroll', scrollFunction);
  
    return (
      <nav id='navbar' className ={`${navBarTransparent}`}>
        <div className ="w-full flex flex-wrap mx-auto p-4 md:p-0">
          <button onClick={() => setIsNavOpen((prev) => !prev)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
            <span className ="sr-only">Open main menu</span>
            <svg className ="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={isNavOpen ? `${navBarOpen}` : `${navBarClosed}`} id="navbar-default">
            <Link to="/"><img id='logo' className = "h-12 w-12 hidden md:inline" src={`${icon}`}></img></Link>
            <ul className ="flex flex-col md:flex-row p-4 md:p-0 m-4 md:m-0 md:justify-center gap-x-2 xl:gap-x-8">
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
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;