import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./menuPosts.module.css";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/tempForMenu.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectur awr. quasi fuga ido nulla
            dolores fugit
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 01.03.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/tempForMenu.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectur awr. quasi fuga ido nulla
            dolores fugit
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 01.03.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/tempForMenu.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectur awr. quasi fuga ido nulla
            dolores fugit
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 01.03.2023</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image
              src="/tempForMenu.jpg"
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectur awr. quasi fuga ido nulla
            dolores fugit
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 01.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
