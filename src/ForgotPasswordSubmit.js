//ForgotPassWordSubmit Component README @fileEnd
import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ForgotPasswordSubmit(props) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationCopde"
        placeholder="Confirmation Code"
        onChange={(event) => {
          event.persist();
          props.updateFormState(event);
        }}
        style={styles.input}
      />
      <input
        name="password"
        placeholder="New Password"
        type="password"
        onChange={(event) => {
          event.persist();
          props.updateFormState(event);
        }}
        style={styles.input}
      />
      <Button onClick={props.ForgotPasswordSubmit} title="Save New Password" />
    </div>
  );
}

export default ForgotPasswordSubmit;

/* REPLACE WITH EXPORT */

// @fileEnd  ForgotPasswordSubmit Component  README  //
/* ****************************************************
 **                                                  **
 ** Based on Nader Dabit's Full Stack Serverless     **
 **  by O'Reilley Publishing 2020                    **
 **                                                  **
 ** accepts 2 propertiess for updating form state   **
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
