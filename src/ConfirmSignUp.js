/*
 ** ConfirmSignUp Component                      **
 ** SEE FILE BOTTOM FOR README                   **
 */

import React from "react";
import Button from "./Button";
import { styles } from "./Form";

function ConfirmSignUp(props) {
  return (
    <div style={styles.container}>
      <input
        name="confirmationcode"
        placeholder="Confirmation Code"
        onChange={(e) => {
          e.persist();
          props.updateForm - ListeningStateChangedEvent();
        }}
        style={styles.input}
      />
      <Button onClick={props.ConfirmSignUp} title="Confirm Sign Up" />
    </div>
  );
}

export default ConfirmSignUp;

/* ***************************************************
 ** README  ConfirmSignUp Component README           **
 **                                                  **
 ** Based on Nader Dabit's Full Stack Serverless     **
 **  by O'Reilley Publishing 2020                    **
 **                                                  **
 ** Holds the form that will handle and submit MFA   **
 ** Code to the User                                 **
 **                                                  **
 ** The ConfirmSignUp Component accepts 2 properties **
 ** updateFormState updates the form state           **
 ** confirmSignup calls its corresponding function   **
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
