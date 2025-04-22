import React from "react";
import loginimg from "../assets/img/loginimg.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-4xl">
        
        {/* Left Side Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={loginimg}
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="text-center mb-6">
            <img
              src="https://demo.storeking.xyz/images/required/theme-logo.png"
              alt="Logo"
              className="w-24 mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold text-green-600">Sign Up</h2>
            <p className="text-gray-500 text-sm">Sign in to continue shopping</p>
          </div>

          <form>
            {/* Email */}
            <div className="mb-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <a href="#" className="text-xs text-green-500">Use Phone Instead</a>
              </div>
              <input
                type="email"
                placeholder="Enter email"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-gray-700">
                  Password <span className="text-red-500">*</span>
                </label>
                <a href="#" className="text-xs text-green-500">Forgot Password</a>
              </div>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            {/* Remember Me */}
            <div className="mb-6 flex items-center">
              <input type="checkbox" className="mr-2" />
              <label className="text-sm text-gray-600">Remember Me</label>
            </div>

            {/* Sign In Button */}
            <Link
                to="/adminlogin"
                className="inline-block w-full text-center bg-green-500 text-white py-2 rounded-md font-medium hover:bg-green-600 transition">
                Back to Login
         </Link>

          </form>

         

          
        </div>
      </div>
    </div>
  );
}

export default Signup;
