import { useState } from "react";
import React from "react";
import {useLazyQuery} from '@apollo/client';
import {QUERY_STATEINCOME} from '../utils/queries';
import '../styles/Query.css'

function Query() {
  const [stateName, setStateName] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [getStateIncome, {loading,error, data } ]= useLazyQuery(QUERY_STATEINCOME);

  const handleChange = (e) => {
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
            <h3 className="form-tag">State Name</h3>
            <input
              className="form-input"
              value={stateName}
              name="stateName"
              onChange={handleChange}
              type="text"
              placeholder="Enter state here"
            />
          </div>
          <br></br>
          <button 
          className="bg btn-primary "
          style={{ cursor: "pointer" }}
          type="submit" >
            Submit
          </button>{" "}
          <br></br>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <div>
       <p>State: {data?.stateincome?.stateName || ''}
       <br></br>
       <br></br>

        Median Income:  {data?.stateincome?.medianIncome || ''}</p>
       </div>
      </div>
    </form>
  );
}

export default Query;
