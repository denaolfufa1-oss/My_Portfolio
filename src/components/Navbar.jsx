import React from 'react';
import './Navbar.css';

// ✏️ EDIT: Change nav links here
const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* ✏️ EDIT: Change logo text */}
      <div className="logo">&lt;Denaol /&gt;</div>
      <ul>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
