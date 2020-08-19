import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "firestore/firebase";
import { useStateValue } from "store/StateProvider";
import { actionTypes } from "store/reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="/slack-new-logo.svg" alt="" />
        <h1>Sign in to Slack clone created by Amir</h1>
        <p>Software Engineer </p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
