import React from "react";
import { Link } from "react-router-dom";
import gojo from "../../assets/gojo.png";
import"../../fonts.css"

export default function SignIn() {
  return (
    <React.Fragment>
      <div className="poppins py-16 pl-16">
        <h1 className="text-5xl font-semibold">Sign <span className="text-blue-700">in</span></h1>
      </div>

      <div className="flex justify-between">
        <form action="" style={{width:"46%"}} className="col-span-2 py-14 px-16">
          <div className="grid gap-4">
            <label htmlFor="" className="text-2xl capitalize">e-mail</label>
            <input type="text" placeholder="Type here..." className="border pl-4 h-12 rounded-lg shadow-lg outline-none bg-gray-100" />
          </div>
          <div className="grid gap-4 mt-10">
            <label htmlFor="" className="text-2xl capitalize">password</label>
            <input type="password" placeholder="Type here..." className="border pl-4 h-12 rounded-lg shadow-lg outline-none bg-gray-100" />
          </div>
          <p className="capitalize text-right text-gray-400 my-5">forgot password?</p>
          <button className="bg-gradient-to-r from-blue-700 shadow-lg w-full to-blue-500 text-white text-2xl py-2 rounded-lg">Sign in</button>
          <h1 className="text-center capitalize text-lg mt-11">don't have account? <Link to="/sign-up" className="text-blue-600">sign up</Link></h1>
        </form>
        <div className="">
          <img src={gojo} alt="gojo satoru" style={{height:"430px"}} className="mr-6"/>
        </div>
      </div>
    </React.Fragment>
  );
}
