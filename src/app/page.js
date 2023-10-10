import styles from "./homepage.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">testing global styles for Link</Link>
    </div>
  );
}
