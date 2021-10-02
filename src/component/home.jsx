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
        {
            id:9,
            url:"https://nawalakarsa.id/wp-content/uploads/2021/04/aquatopeheader.png",
            judul:"Shiroi Suna no Aquatope",
            episode:"13",
        },
        {
            id:10,
            url:"https://images7.alphacoders.com/115/thumbbig-1154420.webp",
            judul:"Scarlet Nexus",
            episode:"14",
        },
        {
            id:11,
            url:"https://www.themoviedb.org/t/p/w780/sAaGHo7ww5QMw6lk1ZWYrSPcgI7.jpg",
            judul:"Shaman King",
            episode:"25",
        },
        {
            id:12,
            url:"https://wallpapercave.com/wp/wp9585969.jpg",
            judul:"Re-Main",
            episode:"11",
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