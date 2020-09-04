import React, { useState } from "react";
import { Auth } from "aws-amplify";
import SignIn from "./Signin";
import SignUp from "./SignUp";
import ConfirmSignUp from "./ConfirmSignUp";
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from "./ForgotPasswordSubmit";

const initialFormState = {
  username: "",
  password: "",
  email: "",
  confirmationCode: "",
};

async function signIn({ username, password }, setUser) {
  try {
    const user = await Auth.signIn(username, password);
    const userInfo = { username: user.username, ...user.attributes };
    setUser(userInfo);
  } catch (error) {
    console.log("Error signing up..", error);
  }
}

async function signUp({ username, password, email }, updateFormType) {
  try {
    await Auth.signUp({
      username,
      password,
      attributes: { email },
    });
    console.log("sign-up successfull");
    updateFormType("confirmSignUp");
  } catch (error) {
    console.log("error signing up..", error);
  }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(username, confirmationCode);
    updateFormType("signIn");
  } catch (error) {
    console.log("error signing up..", error);
  }
}

async function ForgotPassword({ username }, updateFormType) {
  try {
    await Auth.forgotPassword(username);

    updateFormType("forgotPasswordSubmit");
  } catch (error) {
    console.log("error submitting username to reset password..", error);
  }
}

async function forgotPasswordSubmit(
  { username, confirmationCode, password },
  updateFormType
) {
  try {
    await Auth.forgotPasswordSubmit(username, confirmationCode, password);
    updateFormType("signIn");
  } catch (error) {
    console.log("error updating password.. :", error);
  }
}

function Form(props) {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFormState] = useState(initialFormState);
  function updateForm(event) {
    const newFormState = {
      ...formState,
      [event.target.name]: event.target.value,
    };
    updateFormState(newFormState);
  }
  function renderForm() {
    switch(formType) {
      case "signUp":
        return (
          <SignUp
          signup={() => signUp(formState, updateFormType)}
          updateFormState={event => updateForm(event)}
          />
        )
      case "signIn":
        return (
           <SignIn
          signin={() => signIn(formState, updateFormType)}
          updateFormState={event => updateForm(event)}
          />
        )
      case "forgotPassword":
        return (
          <ForgotPassword
          forgotpassword={() => forgotPassword(formState, updateFormType)}
          updateFormState={event => updateForm(event)}
          />
        )
      case "forgotPasswordSubmit":
        return (
          <ForgotPasswordSubmit
          forgotpasswordsubmit={() => forgotPasswordSubmit(formState, updateFormType)}
          updateFormState={event => updateForm(event)}
          />
        )
      case "confirmSignUp":
        return (
          <ConfirmSignUp
            confirmSignUp={()
            => confirmSignUp(formState, updateFormType)}
            updateFormState={event => updateForm(event)}
          />
        )
        default: return null
    }
  }
  return (
  <div>{renderForm()}
  {
    formType === "signUp"  && (
      <p style={styles.ToggleForm}>
        Existing Account?
      <span style={styles.anchor}
      onClick={() =>
        updateFormType("signIn")}
        >Sign In</span>
      </p>
    )
  }
  {
    formType === "signIn"  && (
      <>
      <p style={styles.toggleForm}>
        First Time?
      <span style={styles.anchor}
      onClick={() =>
      updateFormType(signUp)}>
        Sign Up</span></p>
      <p style ={{ ...styles.toggleForm, ...styles.resetPassword}}>
        Forgot Password
      <span style={styles.anchor}
      onClick={() => updateFormType("forgotPassword")}>
        Reset Password
      </span>
      </p>
      </>
    )
  }
  </div>
)

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 45,
    marginTop: 8,
    width: 300,
    maxWidth: 300,
    padding: "0px, 8px",
    fontSize: 16,
    outline: "none",
    border: "none",
    borderBottom: "2px solid rgba(0, 0, 0, .3)",
  },
  toggleForm: {
    fontWeight: "600",
    padding: "0px 25px",
    marginTop: "15px",
    marginBottom: 0,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.6)",
  },
  resetPassword: {
    marginTop: "5px",
  },
  anchor: {
    color: "006bfc",
    cursor: "pointer",
  },
};

export { styles, Form as default };
