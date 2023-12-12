"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";
// import { getAuth } from "firebase/auth";
import { auth } from "../../firebase";
// import { useAuth } from '../context/AuthUserContext';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  // const auth = getAuth();

  const onSubmit = (event: { preventDefault: () => void }) => {
    setError(null);
    //check if passwords match. If they do, create user in Firebase
    // and redirect to your logged in page.
    if (passwordOne === passwordTwo)
      createUserWithEmailAndPassword(auth, email, passwordOne)
        .then((authUser) => {
          console.log("Success. The user is created in Firebase");
          router.push("/logged_in");
        })
        .catch((error) => {
          // An error occurred. Set error message to be displayed to user
          setError(error.message);
        });
    else setError("Password do not match");
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
              <label htmlFor="signUpPassword2">Confirm Password</label>
              <div>
                <input
                  type="password"
                  name="password"
                  value={passwordTwo}
                  onChange={(event: {
                    target: { value: SetStateAction<string> };
                  }) => setPasswordTwo(event.target.value)}
                  id="signUpPassword2"
                  placeholder="Password"
                />
              </div>
            </div>
            <div>
              <div>
                <button>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
