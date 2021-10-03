import React from "react";
import Header from "../component/header";
import snk from "../assets/tensura.mp4"
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function VideoPlayer() {
    let {id} = useParams()
    console.log({id})
    return(
        <React.Fragment>
            <Header></Header>
            <div className="py-10 px-16">
                <h1 className="font-semibold text-6xl capitalize text-center mb-20">tokyo revengers episode 20 sub indo</h1>
                <div className="">
                    <video className="rounded-3xl outline-none" width="2000" height="200" controls>
                        <source src={snk} type="" />
                    </video>
                </div>
                <div className="flex justify-between py-11">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-16 w-16 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 my-3 mx-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </div>
                    <Link to="/home/list-episode">
                        <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-16 rounded-full px-7 flex w-80">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white my-3 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                                <p className="text-2xl capitalize text-white font-semibold my-3 ml-3">daftar episode</p>
                        </div>
                    </Link>
                    <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-16 w-16 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 my-3 mx-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}