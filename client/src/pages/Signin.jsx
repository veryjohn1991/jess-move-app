import { useState } from "react";


import { checkPassword } from '../utils/helpers';

function Signin() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");




    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setPassword(inputValue);

        }
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (userName === "") {
            setErrorMessage("Name is invalid!");

            return;
        }
        if (!checkPassword(password)) {
            setErrorMessage('Choose a more secure password ');
            return;
        }
        setUserName('');
        setPassword('');

    };

    return (

        <div className="container text-center">
            <h1>Sign In</h1>

            <form className="form" onSubmit={handleFormSubmit}>
                <label className="user_input-tag">Name</label>
                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="enter your name"
                />
                <br></br>
                <label className="user_input-tag">Password</label>
                <input
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="enter password"
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}

export default Signin;