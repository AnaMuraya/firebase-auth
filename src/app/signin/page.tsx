"use client";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
// import { getAuth } from "firebase/auth";
import { auth } from "../../firebase";
// import { useAuth } from '../context/AuthUserContext';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  // const auth = getAuth();

  const onSubmit = (event: { preventDefault: () => void }) => {
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    signInWithEmailAndPassword(auth, email, passwordOne)
      .then((authUser) => {
        console.log("Success. The user is signed in using Firebase");
        router.push("/");
      })
      .catch((error) => {
        // An error occurred. Set error message to be displayed to user
        setError(error.message);
      });
    event.preventDefault();
  };

  const onGoogleSubmit = (event: { preventDefault: () => void }) => {
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(
          `Success. The user is signed in using Google. ${token} ${user}`
        );
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);

        setError(`${errorCode} ${errorMessage}\n${email}\n${credential}`);
        // ...
      });
    event.preventDefault();
  };

  return (
    <div className="text-center custom-container">
      <div>
        <div>
          <form className="custom-form" onSubmit={onSubmit}>
            {error && <div color="danger">{error}</div>}
            <div>
              <label htmlFor="signUpEmail">Email</label>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(event: {
                    target: { value: SetStateAction<string> };
                  }) => setEmail(event.target.value)}
                  name="email"
                  id="signUpEmail"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="signUpPassword">Password</label>
              <div>
                <input
                  type="password"
                  name="passwordOne"
                  value={passwordOne}
                  onChange={(event: {
                    target: { value: SetStateAction<string> };
                  }) => setPasswordOne(event.target.value)}
                  id="signUpPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <div>
                <button>Sign In</button>
              </div>
            </div>
          </form>

          <div>
            <button onClick={(e) => onGoogleSubmit(e)}>
              Sign In With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
