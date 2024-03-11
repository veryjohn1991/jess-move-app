import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../utils/mutations";
import "../styles/Signin.css";
import Auth from "../utils/auth";

const Signin = (props) => {
  const [formState, setFormState] = useState({ password: "" });
  const [signin, { error, data }] = useMutation(SIGNIN_USER);

  //updating state when data is entered and sumitted

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    //submitting entered data
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await signin({
        variables: { ...formState },
      });

      Auth.signin(data.signin.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="page-body">
        <h1 className="heading">Sign In</h1>
        <div className="form">
          <div className="user_input-div">
            <h3 className="form-tag">Name</h3>
            <input
              className="form-input"
              placeholder="Enter your name"
              autoComplete="given-name"
              name="username"
              type="text"
              value={formState.userName}
              onChange={handleChange}
            />
            <br></br>
            <h3 className="form-tag">Password</h3>
            <input
              className="form-input"
              placeholder="Enter password"
              autoComplete="off"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />

            <br></br>
            <button
              className="btn btn-primary"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
            <br></br>
            {error && (
              <div>
                <p className="error-text">{error.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signin;
