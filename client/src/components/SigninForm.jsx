import React, { useState } from 'react';
function SigninForm() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const handleSignin = () => {
    // Perform authentication logic here
    setIsSignedIn(true);
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
}
export default SigninForm;