import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import "../styles/Signup.css";
import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  //updating form state to reflect user input

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //preventing page refresh (default) on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.signin(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="page-body">
        <h1 className="heading">Sign Up</h1>
        <div className="form">
          <div className="user_input-div">
            <h3 className="form-tag">Name</h3>
            <input
              className="form-input"
              autoComplete="name"
              placeholder="Enter your username"
              name="name"
              type="text"
              value={formState.name}
              onChange={handleChange}
            />
            <br></br>
            <h3 className="form-tag">Password</h3>
            <input
              className="form-input"
              autoComplete="off"
              placeholder="Enter secure password"
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
                <p className="error-text">{error.Message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
