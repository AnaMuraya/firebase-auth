import Navigation from "@/components/Navigation/Navigation";

import styles from "./page.module.css";

const navigations = [
  {
    page: "signin",
    title: "Uno",
    content: "Sign in",
  },
  {
    page: "signup",
    title: "Dos",
    content: "Sign up",
  },
  {
    page: "signout",
    title: "Tres",
    content: "Sign out",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Navigate</p>
        <div>Here</div>
      </div>

      <div className={styles.center}>
        <div>Welcome to eatery</div>
      </div>

      <div className={styles.grid}>
        {navigations.map((navigation, _) => (
          <Navigation
            key={_}
            page={navigation.page}
            title={navigation.title}
            content={navigation.content}
          />
        ))}
      </div>
    </main>
  );
}
