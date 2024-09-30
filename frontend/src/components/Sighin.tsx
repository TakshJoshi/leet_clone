import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";


export const Singin = () => {
    const actionCodeSettings = {
        url: 'https://localhost:3000',
        handleCodeInApp: true,
      };
    const auth = getAuth();
    const [email, setEmail] = useState("");
    async function onSignIn () {
        await sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                window.localStorage.setItem('emailForSignIn', email);
                alert("sent email");
            })
            .catch((error) => {
                alert("sent not sent");
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
   
    return <div>
        <input type="text" placeholder="email" onChange={(e) => {
            setEmail(e.target.value);
        }}>
        </input>
        <button onClick={() => {
            onSignIn()
        }}>Sign Up</button>
    </div>
}