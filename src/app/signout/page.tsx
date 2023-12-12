"use client";

import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";

const Home = () => {
const router = useRouter();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/", { scroll: false });
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <p>Welcome Home</p>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
