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
                <label className="user_input-tag">Name</label>
                <input
                    className="form-input"
                    placeholder="Enter your name"
                    name="username"
                    type="text"                  
                    value={formState.userName}
                    onChange={handleChange}
                />
                <br></br>
                <label className="user_input-tag">Password</label>
                <input
                    className="form-input"
                    placeholder="enter password"
                    name="password"                   
                    type="password"                   
                    value={formState.password}
                    onChange={handleChange}
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