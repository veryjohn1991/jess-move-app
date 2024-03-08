import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';




const Signin = (props) => {

    const [formState, setFormState] = useState({password:""})
    const [signin, {error, data}] = useMutation(SIGNIN_USER);




    const handleChange = (event) => {

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

            Auth.signin(data.signin.token);
        } catch (e) {
         // console.error(e);
        }

        setFormState({
            username: '',
            password: '',
          });
    
        };
       
    return (

        <div className="container text-center">
            <h1>Signin</h1>
            {data ? (
                <p>Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
            <form className="form" onSubmit={handleFormSubmit}>
                <label className="user_name">Name
                <input
                    className="form-input"
                    placeholder="Enter your name"
                    autoComplete="given-name"
                    name="username"
                    type="text"                  
                    value={formState.userName}
                    onChange={handleChange}
                /></label>
                <br></br>
                <label className="password">Password
                <input
                    className="form-input"
                    placeholder="enter password"
                    autoComplete="new-password"
                    name="password"                   
                    type="password"                   
                    value={formState.password}
                    onChange={handleChange}
                /></label>
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