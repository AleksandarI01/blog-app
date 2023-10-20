import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/tempForMenu.jpg"
            alt="Aleks blog"
            width={50}
            height={50}
            className={styles.logoImg}
          />
          <h1 className={styles.logoText}>AleksBlog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
