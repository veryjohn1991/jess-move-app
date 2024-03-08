import { useState } from "react";
import React from "react";

function Query() {
  const [stateName, setStateName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "stateName") {
      setStateName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!stateName || stateName === "") {
      setErrorMessage("State name is invalid!");

      return;
    }
    
   


    setStateName("");
    //setPassword("");
  };

  return (
    <form>
      <div className="page-body">
        <h1 className="heading">Search States</h1>

        <div className="form" onSubmit={handleFormSubmit}>
          <div className="user_input-div">
            <label className="user_input-tag">Name</label>
            <input
              value={stateName}
              name="stateName"
              onChange={handleInputChange}
              type="text"
              placeholder="enter state name"
            />
          </div>
          <br></br>
          <button type="submit" className="bg btn-primary ">
            Submit
          </button>{" "}
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}

export default Query;
