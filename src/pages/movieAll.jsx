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
            url:"https://images.alphacoders.com/115/thumbbig-1150498.webp",
            judul:"kimetsu no yaiba mugen train",
             slug:"kimetsu-no-yaiba-mugen-train",
        },
        {
            id:17,
            url:"https://images2.alphacoders.com/109/thumbbig-1093000.webp",
            judul:"A Whisker Away",
             slug:"A-Whisker-Away",
        },
        {
            id:18,
            url:"https://images2.alphacoders.com/856/thumbbig-856712.webp",
            judul:" Made in Abyss: Dawn of the Deep Soul",
             slug:"Made-in-Abyss:-Dawn-of-the-Deep-Soul",
        },
        {
            id:19,
            url:"https://images4.alphacoders.com/678/thumbbig-678893.webp",
            judul:"Digimon Adventure: Last Evolution Kizuna",
             slug:"Digimon-Adventure:-Last-Evolution-Kizuna",
        },
        {
            id:20,
            url:"https://images8.alphacoders.com/545/thumbbig-545284.webp",
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
            url:"https://images.alphacoders.com/901/thumbbig-901101.webp",
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