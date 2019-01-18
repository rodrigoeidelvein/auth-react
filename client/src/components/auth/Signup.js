import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class Signup extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <label>Email</label>
          <Field
            name="Email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="Password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
      </form>
    );
  }
}

export default reduxForm({ form: 'signup' })(Signup);
