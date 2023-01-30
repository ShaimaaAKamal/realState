import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import HaveQuestion from '../Shared/HaveQuestion/HaveQuestion';

export default function Layout() {
  const location=useLocation();
  const path=location.pathname;
    useEffect(() => {
    const open=document.querySelector('.open');
    const close=document.querySelector('.close');
    const collapse=document.querySelector('.collapse')
   if(collapse.classList.contains('show')){
    open.classList.remove('d-none');
    close.classList.add('d-none');
    collapse.classList.remove('show');
   } 
  },[path]);
  return (
   <>
      <Navbar/>
      <Outlet/>
      <HaveQuestion/>
      <Footer/>
   </>
  )
}
