import React, { useState } from "react";
import "./Form.css";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailalert, setEmailAlert] = useState("");
  const [passwordalert, setPasswordAlert] = useState("");

  const validateForm = () => {
    const emailRegex =
      /^[a-zA-Z0-9" ".!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex =
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    const emailvalidation = () => {
      if (emailRegex.test(email)) {
        setEmailAlert("You entered a valid Email");
        console.log("The Email is valid");
        return true;
      } else if (email == "") {
        setEmail("You must enter an email address!!");
        console.log("you must enter an email");
        return false;
      } else if (!emailRegex.test(email)) {
        setEmail("You entered invalid email");
        console.log("you entered invalid email");
        return false;
      }
    };
    const passwordvalidation = () => {
      if (passwordRegex.test(password)) {
        setPasswordAlert("Your password is valid");
        console.log("true");
        return true;
      } else if (password == "") {
        setPasswordAlert("you must choose a password");
        console.log("you must enter a password");
        return false;
      } else if (!passwordRegex.test(password)) {
        setPasswordAlert(
          "Password must be minimum 8 characters and include at least 1 letter, 1 number and 1 special character!"
        );
        console.log("The Password is invalid");

        return false;
      }
    };
    if (emailvalidation() && passwordvalidation()) {
      alert("Successful Signin");
      console.log("Successful Signin");

      return true;
    }
  };

  const handleChangeemail = (mail: any) => {
    setEmail(mail.target.value);
  };
  const handleChangepassword = (pass: any) => {
    setPassword(pass.target.value);
  };
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="containerform">
      <h1 className="titleh1">Signin Page</h1>
      <form onSubmit={handleOnSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                {" "}
                <label>Email:</label>
              </td>
              <td>
                <input
                  id="mailInput"
                  type="email"
                  placeholder="Enter your Email"
                  name="email"
                  value={email}
                  onChange={handleChangeemail}
                />
              </td>
            </tr>
            <p className="Alert">{emailalert}</p>
            <tr>
              <td>
                {" "}
                <label>Password:</label>
              </td>
              <td>
                <input
                  id="passwordInput"
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  value={password}
                  onChange={handleChangepassword}
                />
              </td>
            </tr>
            <p className="Alert">{passwordalert}</p>
          </tbody>
        </table>
        <button onClick={validateForm}>Send</button>
      </form>
    </div>
  );
};
export default Form;