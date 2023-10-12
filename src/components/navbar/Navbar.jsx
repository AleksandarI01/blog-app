import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return <div className={styles.container}>
    <div className={styles.welcome}>
      <p>Write exciting blogs for others to read</p>
    </div>
    <div className={styles.logo}>My Blogify</div>
    <div className={styles.links}>
      <ThemeToggle />
      <Link href="/">Homepage</Link>
      <Link href="/">Contact</Link>
      <Link href="/">About</Link>
      <AuthLinks />
    </div>
  </div>;
};

export default Navbar; 
