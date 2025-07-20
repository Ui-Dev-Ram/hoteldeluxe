'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <div className='container'>
        <div className='row'>
            <div className="logo">
                <Link href="/">Hotel<span className='sublogo'>Deluxe</span></Link>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
                <ul>
                <li>
                    <Link href="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <span>About Us</span>
                    </Link>
                </li>
                <li>
                    <Link href="/service">
                        <span>Services</span>
                    </Link>
                </li>
                <li>
                    <Link href="/rooms">
                        <span>Rooms</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blogs">
                        <span>Blog</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span>Contact</span>
                    </Link>
                </li>
                </ul>

                <button className="book-btn">
                    <FontAwesomeIcon icon={faBookmark} /> BOOK NOW
                </button>
            </nav>
        </div>
      </div>
    </header>
  );
}
