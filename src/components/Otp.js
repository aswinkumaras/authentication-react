import React, { useState } from 'react';
import { BsFillShieldLockFill} from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";


const Otp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }
  return (
    <div>
        <div className="bg-white text-emerald-700 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={25} />
                </div>
                <label
                  htmlFor="otp"
                  className="font-bold text-md text-white text-center">
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                ></OtpInput>
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded mt-3"
                >
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
    </div>
  )
}

export default Otp