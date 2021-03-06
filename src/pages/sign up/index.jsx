import React from "react";
import { Link } from "react-router-dom";
import gojo from "../../assets/gojo.png";
import { useHistory } from "react-router";
export default function SignUp() {
  let history = useHistory()
  return (
    <React.Fragment>
      <div className="poppins py-16 pl-16">
        <h1 className="text-5xl font-semibold">Sign <span className="text-blue-700">up</span></h1>
      </div>

      <div className="flex justify-between">
        <form action="" style={{width:"46%"}} className="col-span-2 py-14 px-16">
          <div className="grid gap-4">
            <label htmlFor="" className="text-2xl capitalize">e-mail</label>
            <input type="text" placeholder="Type here..." className="border pl-4 h-12 rounded-lg shadow-lg outline-none bg-gray-100" />
          </div>
          <div className="grid gap-4 mt-10">
            <label htmlFor="" className="text-2xl capitalize">username</label>
            <input type="text" placeholder="Type here..." className="border pl-4 h-12 rounded-lg shadow-lg outline-none bg-gray-100" />
          </div>
          <div className="grid gap-4 mt-10">
            <label htmlFor="" className="text-2xl capitalize">password</label>
            <input type="password" placeholder="Type here..." className="border pl-4 h-12 rounded-lg shadow-lg outline-none bg-gray-100" />
          </div>
          <div className="grid gap-4 mt-10">
            <label htmlFor="" className="text-2xl capitalize">password confirmation</label>
            <input type="password" placeholder="Type here..." className="border pl-4 h-12 rounded-lg shadow-lg outline-none bg-gray-100" />
          </div>
          <div className="mt-6 flex items-center justify-center">
            <input type="checkbox" className="mt-1 mr-3" name="" id="" />
            <label className="text-gray-400" htmlFor="">Setuju melakukan pembayaran Rp 20.000/bulan</label>
          </div>
            <button onClick={()=>history.push("/home")} className="bg-gradient-to-r mt-6 mb-14 from-blue-700 shadow-lg w-full to-blue-500 text-white text-2xl py-2 rounded-lg">Sign in</button>
        </form>
        <div className="py-14">
          <img src={gojo} alt="gojo satoru" style={{height:"430px"}} className="mr-6"/>
        </div>
      </div>
    </React.Fragment>
  );
}
