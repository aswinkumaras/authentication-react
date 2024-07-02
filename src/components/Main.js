import React from 'react'
import Icon from './Icon'
import Success from './Success'
import Verification from './Verification'
import Login from './Login'
import Otp from './Otp'
import PhoneNum from './PhoneNum'
import { useState } from 'react'
import {Toast,Toaster} from 'react-hot-toast'
const Main = () => {
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);
    
  return (
    <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div id="recaptcha-container"></div>
        <Icon />
        {user ? (
          <Success />
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
            <Verification />
            ) : (
              <Login />
            )
          }
            {showOTP ? (
              <>
                <Otp />
              </>
            ) : (
              <>
                <PhoneNum />
              </>
            )}
          </div>
        )}
    </div>
  )
}

export default Main