import React,{useState} from 'react'
import './headers.css'
import Link from "next/link";
const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

export default function Header(){

  return (
    <header>
      <nav className={`nav`}>
          <div className="nav-date">Mon-Thu <span>9:00 AM - 5:30 PM</span></div>
          <div className="nav-adress">Visit our showroom in 1234 Street Adress City Address, 1234  <span>Contact Us</span></div>
          <div className="nav-info">Call Us: (123) 456 7890</div>
      </nav>
    </header>
  );
}