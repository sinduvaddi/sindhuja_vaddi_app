import React from "react";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Your Dashboard
      </a>
      <ul>
        <CustomLink href="myProfile">My Profile</CustomLink>
        <CustomLink href="EditProfile">Edit Profile</CustomLink>
        <CustomLink href="Login">Login</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ href, children, ...props }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}
