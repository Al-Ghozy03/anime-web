import React from "react";
import Header from "../component/header";
import DataMovieAll from "./dataMovieAll";

export default function LisstMovie() {
    const [movie, setMovie] = React.useState([
        {
            id:13,
            url:"https://images4.alphacoders.com/687/thumb-1920-687986.jpg",
            judul:"kimi no nawa",
             slug:"kimi-no-nawa",
        },
        {
            id:14,
            url:"https://images5.alphacoders.com/100/thumb-1920-1003363.jpg",
            judul:"tenki no ko",
             slug:"tenki-no-ko",
        },
        {
            id:15,
            url:"https://images4.alphacoders.com/738/thumb-1920-738316.jpg",
            judul:"koe no katachi",
             slug:"koe-no-katachi",
        },
        {
            id:16,
            url:"https://images6.alphacoders.com/115/thumb-1920-1150499.png",
            judul:"kimetsu no yaiba mugen train",
             slug:"kimetsu-no-yaiba-mugen-train",
        },
        {
            id:17,
            url:"https://images2.alphacoders.com/109/thumb-1920-1093000.png",
            judul:"A Whisker Away",
             slug:"A-Whisker-Away",
        },
        {
            id:18,
            url:"https://i0.wp.com/animenewsplus.net/wp-content/uploads/2020/06/Anime-Josee-to-Tora-to-Sakana-tachi-Visual.jpg?fit=2400%2C1900&ssl=1",
            judul: " josee to tora to sakana-tachi",
            slug: "josee-to-tora-to-sakana-tachi",
        },
        {
            id:19,
            url:"https://images4.alphacoders.com/678/thumb-1920-678893.jpg",
            judul:"Digimon Adventure: Last Evolution Kizuna",
             slug:"Digimon-Adventure:-Last-Evolution-Kizuna",
        },
        {
            id:20,
            url:"https://images.alphacoders.com/872/thumb-1920-872607.jpg",
            judul:"Psycho-Pass 3: First Inspector",
             slug:"Psycho-Pass-3:-First-Inspector",
        },
        {
            id:21,
            url:"https://images.alphacoders.com/901/thumbbig-901101.webp",
            judul:"Violet Evergarden Movie",
             slug:"Violet-Evergarden-Movie",
        },
        {
            id:22,
            url:"https://images4.alphacoders.com/911/thumb-1920-911581.jpg",
            judul:"Detective Conan Movie 24: The Scarlet Bullet",
            slug:"Detective-Cona-Movi-24:-The-Scarlet-Bullet",
        },
        
    ])
    return(
        <React.Fragment>
            <Header></Header>
            <div className="px-10 py-6 grid grid-cols-4">
            {movie?.map((i, key) => (
                <DataMovieAll
                    key={key}
                    url={i.url}
                    judul={i.judul}
                    episode={i.episode}
                    slug={i.slug}
                    id={i.id}
                ></DataMovieAll>
        ))}

            </div>
        </React.Fragment>
    )
}