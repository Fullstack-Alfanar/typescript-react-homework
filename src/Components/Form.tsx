import React, { useEffect, useState } from "react";
import "./Form.css";
import { ValidateForm } from "./Util/validateform";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailalert, setEmailAlert] = useState("");
  const [passwordalert, setPasswordAlert] = useState("");

  const validateForm = () => {
    const emailResult = ValidateForm.validateEmail(email);
    if (!emailResult.status) {
      console.log(emailResult.message);
      setEmailAlert(emailResult.message);
    }

    const passwordResult = ValidateForm.validatePassword(password);
    if (!passwordResult.status) {
      console.log(passwordResult.message);
      setPasswordAlert(passwordResult.message);
    }

    if (emailResult.status && passwordResult.status) {
      alert("Successful Signin");
      console.log("Successful Signin");
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
