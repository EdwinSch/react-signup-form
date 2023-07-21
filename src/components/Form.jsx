import { useState } from "react";
import Banner from "./Banner";

import { nanoid } from "nanoid";

const Form = () => {
  const [firstNameValidation, setFirstNameValidation] = useState(true);
  const [lastNameValidation, setLastNameValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(true);
  const [emailValidation, setEmailValidation] = useState(true);

  const [member, setMember] = useState({
    id: nanoid(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // on Change
  const handleChange = (event) => {
    // console.log(event.target.name);
    // console.log(event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  // on Submit
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate Inputs
    if (!member.firstName) {
      console.log("first check");
      setFirstNameValidation(false);
      return;
    }
    if (!member.lastName) {
      console.log("last check");
      setLastNameValidation(false);
      return;
    }
    if (!member.email.includes("@")) {
      setEmailValidation(false);
      console.log("email check");
      return;
    }
    if (!member.password) {
      console.log("pass check");
      setPasswordValidation(false);
      return;
    }

    // console.log(member);
    //Reset Form
    setMember({
      id: nanoid(),
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <section className="form-wrapper">
      <Banner />
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-wrapper">
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            value={member.firstName}
            onChange={handleChange}
            className={
              firstNameValidation
                ? "input-field"
                : "input-field false-validation"
            }
          />
          {firstNameValidation || (
            <p className="error">First Name can not be empty</p>
          )}
        </div>

        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={member.lastName}
          onChange={handleChange}
          className={
            lastNameValidation ? "input-field" : "input-field false-validation"
          }
        />
        <input
          type="email"
          name="email"
          placeholder="email address"
          value={member.email}
          onChange={handleChange}
          className={
            emailValidation ? "input-field" : "input-field false-validation"
          }
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={member.password}
          onChange={handleChange}
          className={
            passwordValidation ? "input-field" : "input-field false-validation"
          }
        />

        <button type="submit">claim your free trial</button>
        <p>
          By clicking the button, you are agreeing to our
          <span> Terms and Services</span>
        </p>
      </form>
    </section>
  );
};

export default Form;
