import React from "react";
import Header from "../component/header";
import DataOnGoingAll from "./dataOnGoingAll";

export default function ListOngoing() {

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

    return(
        <React.Fragment>
            <Header></Header>
            <div className="px-10 py-6 grid grid-cols-4">
                {onGoing?.map((i,key)=>
                <DataOnGoingAll
                    key={key}
                    judul={i.judul}
                    url={i.url}
                    episode={i.episode}
                ></DataOnGoingAll>
                )}
            </div>
        </React.Fragment>
    )
}