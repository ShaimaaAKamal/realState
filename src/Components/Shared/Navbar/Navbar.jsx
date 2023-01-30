import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css'
import logo from '../../../assets/images/logo.png'
export default function Navbar() {
  const handleMenuClick=(e)=>{
      const open=document.querySelector('.open');
      const close=document.querySelector('.close');
      open.classList.toggle('d-none');
      close.classList.toggle('d-none');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
  <div className="container-lg px-lg-4 px-0">
    <NavLink className="navbar-brand ms-2 ms-lg-0" to="">
      <img src={logo} alt="Rent up logo images" className={styles.logoWidth} />
    </NavLink>
    <button className="navbar-toggler rounded-1 me-2 me-lg-0 text-white bgSite py-3 px-4 " type="button" onClick={handleMenuClick} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <i className="fa-solid fa-bars open"></i>
       <i className="fa-solid fa-xmark d-none close"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 px-4 px-lg-0">
        <li className="nav-item">
             <NavLink className="nav-link px-lg-3" aria-current="page" to="">Home</NavLink>
        </li>
        <li className="nav-item">
              <NavLink className="nav-link px-lg-3" to="/about">About</NavLink>
        </li>
         <li className="nav-item">
              <NavLink className="nav-link px-lg-3" to="/services">Services</NavLink>
        </li>
          <li className="nav-item">
             <NavLink className="nav-link px-lg-3" to="/blog">Blog</NavLink>
          </li>
           <li className="nav-item">
             <NavLink className="nav-link  px-lg-3" to="/pricing">Pricing</NavLink>
          </li>
           <li className="nav-item">
             <NavLink className="nav-link  px-lg-3" to="/contact">Contact</NavLink>
          </li>
      
      </ul>
      <form className="d-none d-lg-flex align-items-center" role="search">
        <span>
           <span className="badge bgSite  small me-1 rounded-circle">4</span>
           <span>My List</span>
        </span>
        <button className="ms-3 mainBtn" type="submit">
          <i className="fa-solid fa-right-to-bracket me-2"></i>
          <span>Sign In</span>
          </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
