import React from "react";
import { Link } from "react-router-dom";
import animee from "../assets/Animee.png"

export default function HeaderNo() {
    return(
        <React.Fragment>
            <div className="flex justify-between py-10 px-11">
                <img className="h-10" src={animee} alt="" />
                <div className="flex">
                    <input type="text" style={{width:"550px"}} className="rounded-full outline-none pl-3 bg-gray-300" placeholder="Cari anime" />
                    <div className="relative top-2 right-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div className="flex justify-between">
                        <Link to="/sign-in" className="w-32 rounded-full hover:bg-blue-700 hover:text-white border border-blue-700 text-center h-10" style={{paddingTop:"3px"}}>Sign in</Link>
                        <Link to="/sign-up" className="w-32 rounded-full border hover:border-blue-700 hover:bg-white hover:text-black text-white bg-blue-700 text-center h-10 ml-6" style={{paddingTop:"3px"}}>Sign up</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}