import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/featuredImg1.jpg"
                alt=""
                fill
                className={styles.avatar}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.12.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/featuredImg1.jpg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi, accusamus reprehenderit praesentium tempora, tempore dolor,
              eligendi repellendus eum obcaecati optio! Totam esse quod eum
              ducimus ut a quas sed.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi, accusamus reprehenderit praesentium tempora, tempore dolor,
              eligendi repellendus eum obcaecati optio! Totam esse quod eum
              ducimus ut a quas sed.
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              consequatur.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              animi, accusamus reprehenderit praesentium tempora, tempore dolor,
              eligendi repellendus eum obcaecati optio! Totam esse quod eum
              ducimus ut a quas sed.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
