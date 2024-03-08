import { useState } from "react";
import React from "react";
import {useLazyQuery} from '@apollo/client';
import {QUERY_STATEINCOME} from '../utils/queries';

function Query() {
  const [stateName, setStateName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [getStateIncome, {loading,error, data } ]= useLazyQuery(QUERY_STATEINCOME);

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
    
    getStateIncome({variables:{stateName}});
   


    setStateName("");
    //setPassword("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="page-body">
        <h1 className="heading">Search States</h1>

        <div className="form">
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
       <p> {data?.stateincome?.stateName || ''}</p>
      </div>
    </form>
  );
}

export default Query;
