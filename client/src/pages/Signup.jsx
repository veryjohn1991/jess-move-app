import { useState } from "react";


        import { checkPassword } from '../utils/helpers';
        
        function Signup() {
        
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
        
             <div className="card-container">
                <h2>Sign Up</h2>

                <form className ="form" onSubmit={handleFormSubmit}>
                    <label className="user_input-tag">User Name</label>
                    <input 
                    value={userName}
                    name="username" 
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter your name" 
                    />
                    <br></br>
                    <label className="password">Password</label>
                    <input
                    value={password} 
                    type="password" 
                    name="password" 
                    onChange={handleInputChange}
                    id="password" 
                    placeholder="Enter secure password" />

                  <br></br>
                  <button type="submit">Sign Up</button>
                </form>
            
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                </div>
            );
        }
        
        export default Signup;
       
    
