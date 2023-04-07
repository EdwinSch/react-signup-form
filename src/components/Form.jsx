import Banner from "./Banner";
import Input from "./Input";

const Form = () => {
  // on submit
  const handleSubmit = (event) => {
    event.preventDefault();
    // get person
    const newMember = new Object();
    newMember.firstName = event.target[0].value.toLowerCase();
    newMember.lastName = event.target[1].value.toLowerCase();
    newMember.email = event.target[2].value;
    newMember.password = event.target[3].value;
    console.log(newMember);
  };

  return (
    <section className="form-wrapper">
      <Banner />
      <form onSubmit={handleSubmit}>
        <Input type={"text"} name={"firstname"} placeholder={"first name"} />
        <Input type={"text"} name={"lastname"} placeholder={"last name"} />
        <Input type={"email"} name={"email"} placeholder={"email address"} />
        <Input type={"password"} name={"password"} placeholder={"password"} />

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
