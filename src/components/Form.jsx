import Banner from "./Banner";
import Input from "./Input";

const Form = () => {
  return (
    <section className="form-wrapper">
      <Banner />
      <form>
        <Input />
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
