import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';




const Signin = (props) => {

    const [formState, setFormState] = useState({password:""})
    const [signin, {error, data}] = useMutation(SIGNIN_USER);




    const handleInputChange = (event) => {

        const { name, value } = event.target;
       

        setFormState({
            ...formState,
            [name]: value,
        });
    };
        

    const handleFormSubmit = async (event) => {

        event.preventDefault();
        console.log(formState);
        try {
            const {data} = await signin({
                variables: {...formState},
            });

            Auth.signin(data.login.token);
        } catch (e) {
          console.error(e);
        }

        setFormState({
            username: '',
            password: '',
          });
    
        };
       
    return (

        <div className="container text-center">
            <h1>Sign In</h1>
            {data ? (
                <p>Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
            <form className="form" onSubmit={handleFormSubmit}>
                <label className="user_input-tag">Name</label>
                <input
                    value={formState.userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name"
                />
                <br></br>
                <label className="user_input-tag">Password</label>
                <input
                    value={formState.password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="enter password"
                />
                <br></br>
                <button type="submit">Submit</button>
            </form>
            )}
            
            {error && (
                <div>
                    <p className="error-text">{error.Message}</p>
                </div>
            )}
        </div>
    );
}

export default Signin;