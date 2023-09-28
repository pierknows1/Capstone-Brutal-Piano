// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signInWithGoogle } from './firebase';

// const SignIn = () => {
//   const [isSignedIn, setIsSignedIn] = useState(false);
//   const navigate = useNavigate(); 

//   const handleSignInClick = () => {
//     signInWithGoogle()
//       .then(() => {
//         setIsSignedIn(true);
       
//         navigate('/welcome');
//       })
//       .catch(error => {
     
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       {isSignedIn ? (
//         <p>You are signed in!</p>
//       ) : (
//         <div>
//           <p>Click the button below to sign in:</p>
//           <button onClick={handleSignInClick}>Sign In with Google</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SignIn;
