import React from "react";
import Ongoing from "./ongoing";
import CarouselImage from "./carousel";
import Header from "./header";
import Movie from "./movie";
import { Link } from "react-router-dom";
import HeaderNo from "./headerNo";
import CarouselNo from "./carouselImageNo";
import OngoingNo from "./ongoingNo";
import swal from "sweetalert";
export default function HomeNoAkun() {
    return(
        <React.Fragment>
            <HeaderNo></HeaderNo>
            <CarouselNo></CarouselNo>
            <h1 className="text-3xl capitalize px-14 font-semibold mb-6">ongoing</h1>
            <div className="grid grid-cols-4 px-11">
                <OngoingNo></OngoingNo>
                <OngoingNo></OngoingNo>
                <OngoingNo></OngoingNo>
                <OngoingNo></OngoingNo>
            </div>
                <div className="flex item-end justify-end px-11 ">
                    <div onClick={()=>{
                        swal("Warning", "Kamu harus login dahulu", "warning")
                    }} className="bg-gradient-to-r shadow-md from-blue-700 to-blue-500 w-36 rounded-full h-12"><p className="text-center text-xl font-semibold text-white py-3">More</p></div>
                </div>
            <h1 className="text-3xl capitalize px-14 font-semibold mb-6">movie</h1>
                <div className="grid grid-cols-4 px-11">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>
                <div className="flex item-end justify-end px-11 ">
                    <div onClick={()=>{
                        swal("Warning", "Kamu harus login dahulu", "warning")
                    }} className="bg-gradient-to-r shadow-md from-blue-700 to-blue-500 w-36 rounded-full h-12"><p className="text-center text-xl font-semibold text-white py-3">More</p></div>
                </div>
        </React.Fragment>
    )
}