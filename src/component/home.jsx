import React from "react";
import Ongoing from "./ongoing";
import CarouselImage from "./carousel";
import Header from "./header";
import Movie from "./movie";
import { Link } from "react-router-dom";

export default function Home() {

    const [onGoing,setOnGoing] = React.useState([
        {
            id:5,
            url:"https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
            judul:"Tensei Shitara Slime Datta Ken Season 2 Part 2",
            episode:"8",
        },
        {
            id:6,
            url:"https://images.alphacoders.com/820/thumb-1920-820755.png",
            judul:"boruto the next generation",
            episode:"217",
        },
        {
            id:7,
            url:"https://images4.alphacoders.com/957/thumb-1920-957927.png",
            judul:"gotoubun no hanayome",
            episode:"10",
        },
        {
            id:8,
            url:"https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
            judul:"mushoku tensei",
            episode:"19",
        },
    ])
    console.log(onGoing)

    return(
        <React.Fragment>
            <Header></Header>
            <CarouselImage></CarouselImage>
            <h1 className="text-3xl capitalize px-14 font-semibold mb-6">ongoing</h1>
            <div className="grid grid-cols-4 px-11">
                {onGoing?.map((i,key)=>
                <Ongoing
                key={key}
                url={i.url}
                judul={i.judul}
                episode={i.episode}
                ></Ongoing>
                )}
            </div>
                <Link to="/home/ongoing-all" className="flex item-end justify-end px-11 ">
                    <div className="bg-gradient-to-r shadow-md from-blue-700 to-blue-500 w-36 rounded-full h-12"><p className="text-center text-xl font-semibold text-white py-3">More</p></div>
                </Link>
            <h1 className="text-3xl capitalize px-14 font-semibold mb-6">movie</h1>
                <div className="grid grid-cols-4 px-11">
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                    <Movie></Movie>
                </div>
                <Link to="/home/movie-all" className="flex item-end justify-end px-11 ">
                    <div className="bg-gradient-to-r shadow-md from-blue-700 to-blue-500 w-36 rounded-full h-12"><p className="text-center text-xl font-semibold text-white py-3">More</p></div>
                </Link>
        </React.Fragment>
    )
}