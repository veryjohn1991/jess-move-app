import { useState } from "react";
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

       
        
        const  Signup = () => {
        
            const [formState, setFormState] = useState({
               username: '',
               password: '',
            });  
            const [addUser, {error, data}] = useMutation(ADD_USER);
        
        
        
            const handleChange = (event) => {
               const {name, value} = event.target;

               setFormState({
                ...formState,
                [name]: value,
               });
            };
        
            const handleFormSubmit = async (event) => {
               event.preventDefault();
               console.log(formState);
        
               try {
                const {data} = await addUser({
                    variables: { ...formState},
                });

                Auth.signin(data.addUser.token);
               } catch (err) {
                //console.error(err); 
               }
        
            };
        
            return (
        
             <div className="card-container">
                <h2>Sign Up</h2>
                 <div className="card-body">
                    {data ? (
                        <p> Success! You may now head{' '}
                        <Link to="/">back to the homepage.</Link>
                        </p>
                    ) : (
                <form onSubmit={handleFormSubmit}>
                    <label className="user_name">User Name
                    <input 
                    className="form-input"
                    placeholder="Enter your username"
                    name="username" 
                    type="text"
                    value={formState.name} 
                    onChange={handleChange}                   
                    /></label>
                    <br></br>
                    <label className="password">Password
                    <input
                    className="form-input"
                    placeholder="Enter secure password"                    
                    name="password" 
                    type="password" 
                    value={formState.password} 
                    onChange={handleChange}           
                     /></label>

                  <br></br>
                  <button type="submit">Sign Up</button>
                </form>
                    )}

                    {error && (
                        <div>
                            <div className="error-text">{error.Message}</div>
                        </div>
                    )}
                </div>
            </div>
            );
        };
        
        export default Signup;
       
    
