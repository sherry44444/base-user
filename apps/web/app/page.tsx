"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  const router = useRouter();

  return (
    <main className={styles.main}>
      welcome the base user
      <div>
        <button
          onClick={() => {
            router.push("/sign-up");
          }}
          type="button"
        >
          sign up
        </button>
        <button
          onClick={() => {
            router.push("/login");
          }}
          type="button"
        >
          login
        </button>
        <div className="flex flex-col"></div>
      </div>
    </main>
  );
}
