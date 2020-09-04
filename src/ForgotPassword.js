//ForgotPassword Component README @fileEnd
import React from "react";
import { styles } from "./Form";
import Button from "./Button";

function ForgotPassword(props) {
  return (
    <div style={styles.container}>
      <input
        name="username"
        placeholder="Username"
        onChange={(event) => {
          event.persist();
          props.updateFormState(event);
        }}
        style={styles.input}
      />
      <Button onClick={props.ForgotPassword} title="Reset password" />
    </div>
  );
}

export default ForgotPassword;

// @fileEnd  ForgotPassword Component  R E A D M E   //
/* ****************************************************
 **                                                  **
 ** Based on Nader Dabit's Full Stack Serverless     **
 **  by O'Reilley Publishing 2020                    **
 **                                                  **
 ** accepts 2 propertiess for updateing form state   **
 ** and calling the forgotPassword function          **
 **                                                  **
 ** ORIGIN DEPLOYMENT BY @BryanChasko ^.^            **
 ** ABSTRACT SPACECRAFT, LLC                         **
 **                                                  **
 ** Reviewed by:                                     **
 ** @abraidotti Alessandro "Sandro" Braidotti        **
 ** @jtmcbride Joseph "Joe" McBride                  **
 ** @mheisig Matthew "Matt" Heisig                   **
 **                                                  **
 *************************************************** */
