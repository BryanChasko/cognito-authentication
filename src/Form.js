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

function Form(props) {
  const [formType, updateFormType] = useState("signIn");
  const [formState, updateFormState] = useState(initialFormState);
  function renderForm() {}
  return <div>{renderForm()}</div>;
}

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
