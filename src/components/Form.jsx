import { useState } from "react";
import Banner from "./Banner";

import { nanoid } from "nanoid";

const Form = () => {
  const [validation, setValidation] = useState(true);
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
    if (!member.firstName || !member.lastName || !member.password) {
      console.log("you shall not pass");
      return;
    }

    // if (!member.password.includes("@")) {
    //   console.log("negative");
    //   return;
    // }

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
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={member.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={member.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email address"
          value={member.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={member.password}
          onChange={handleChange}
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
