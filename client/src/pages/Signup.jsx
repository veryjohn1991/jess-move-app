import { useState } from "react";
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

       
        
        const  Signup = () => {
        
            const [formState, setFormState] = useState({
               uesrname: '',
               password: '',
            });  
            const [addUser, {error, data}] = useMutation(ADD_USER);
        
        
        
            const handleInputChange = (event) => {
               const {name, value} = event.target;

               setFormState({
                ...formState,
                [name]: value,
               });
            };
        
            const handleFormSubmit = async (e) => {
               e.preventDefault();
               console.log(formState);
        
               try {
                const {data} = await addUser({
                    variables: { ...formState},
                });

                Auth.login(data.addUser.token);
               } catch (e) {
                console.error(e); 
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
                <form className ="form" onSubmit={handleFormSubmit}>
                    <label className="user_input-tag">User Name</label>
                    <input 
                    value={formState.name}
                    name="username" 
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your username" 
                    />
                    <br></br>
                    <label className="password">Password</label>
                    <input
                    value={formState.password} 
                    type="password" 
                    name="password" 
                    onChange={handleInputChange}
                    id="password" 
                    placeholder="Enter secure password" />

                  <br></br>
                  <button type="submit">Sign Up</button>
                </form>
                    )}

                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            </div>
            );
        }
        
        export default Signup;
       
    
