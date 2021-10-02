import React from "react";
import { Link } from "react-router-dom";
import animee from "../assets/Animee.png"

export default function Header() {
    return(
        <React.Fragment>
            <div className="flex justify-between py-10 px-11">
                <Link to="/">
                    <img className="h-10" src={animee} alt="" />
                </Link>
                <div className="flex">
                    <input type="text" style={{width:"550px"}} className="rounded-full outline-none pl-3 bg-gray-300" placeholder="Cari anime" />
                    <div className="relative top-2 right-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-11" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </React.Fragment>
    )
}