import Image from "next/image";
import styles from "./comments.module.css";
import Link from "next/link";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="write a comment..." />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Please Login to write a comment.</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/featuredImg1.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.12.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
            suscipit fuga! Vitae praesentium, maiores optio pariatur labore qui
            quaerat. Magni, assumenda? Voluptatem obcaecati quis doloribus nihil
            totam quasi incidunt.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/featuredImg1.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.12.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
            suscipit fuga! Vitae praesentium, maiores optio pariatur labore qui
            quaerat. Magni, assumenda? Voluptatem obcaecati quis doloribus nihil
            totam quasi incidunt.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/featuredImg1.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.12.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
            suscipit fuga! Vitae praesentium, maiores optio pariatur labore qui
            quaerat. Magni, assumenda? Voluptatem obcaecati quis doloribus nihil
            totam quasi incidunt.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/featuredImg1.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.12.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
            suscipit fuga! Vitae praesentium, maiores optio pariatur labore qui
            quaerat. Magni, assumenda? Voluptatem obcaecati quis doloribus nihil
            totam quasi incidunt.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/featuredImg1.jpg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.12.2022</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
            suscipit fuga! Vitae praesentium, maiores optio pariatur labore qui
            quaerat. Magni, assumenda? Voluptatem obcaecati quis doloribus nihil
            totam quasi incidunt.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
