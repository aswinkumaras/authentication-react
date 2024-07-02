import React from 'react'
import {BsTelephoneFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import { useState } from 'react';
import { auth } from "./firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import SignUp from './SignUp';
import {Link,Routes,Route} from 'react-router-dom';

const PhoneNum = () => {
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [signUp,setSignUp] = useState('false')

  const onCaptchVerify= ()=> {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,"recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        },
        
      );
    }
  }

 
  function onSignup() {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
        toast.success("OTP sended successfully!");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }
  return (
    <div>
      <div className="bg-yellow-500 text-black w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={25} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-l text-white"
                >
                  Enter your phone number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} className="mt-2"/>
                <button
                  onClick={onSignup}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded mt-3"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send code via SMS</span>

                </button>
                <p className='text-white text-center py-2'>If you already have an account? 
                
                  <Link to="/signup" onClick={()=>setSignUp(!signUp)}>signUp.</Link>
                  
                {signUp &&
                  <Routes>
                    <Route path="/signup" element={<SignUp />}/>
                  </Routes>
                }
              
                </p>
    </div>
  )
}

export default PhoneNum