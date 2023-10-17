import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {/* Style */}
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.style}`}
        >
          <Image
            src="/style.jpg"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Style
        </Link>
        {/* Fashion */}
        <Link
          href="/blog?cat=fashion"
          className={`${styles.category} ${styles.fashion}`}
        >
          <Image
            src="/fashion.jpg"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Fashion
        </Link>
        {/* Food */}
        <Link
          href="/blog?cat=food"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/food.jpg"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Food
        </Link>
        {/* Travel */}
        <Link
          href="/blog?cat=travel"
          className={`${styles.category} ${styles.travel}`}
        >
          <Image
            src="/travel.jpg"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Travel
        </Link>
        {/* Culture */}
        <Link
          href="/blog?cat=culture"
          className={`${styles.category} ${styles.culture}`}
        >
          <Image
            src="/culture.jpg"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Culture
        </Link>
        {/* Coding */}
        <Link
          href="/blog?cat=coding"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/coding.jpg"
            className={styles.image}
            alt=""
            width={32}
            height={32}
          />
          Coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
