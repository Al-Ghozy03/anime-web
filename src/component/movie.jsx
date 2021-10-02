import React from "react";

export default function Movie(props) {
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
            <div className="mb-4 px-10">
                <div>
                    <div style={{backgroundImage:`url(${props.url})`}} className="bg-red-700 w-80 bg-cover rounded-2xl h-40">
                        <div className="bg-black h-40 w-80 rounded-2xl bg-opacity-70">
                            <div className="py-14 px-32">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-2xl capitalize font-semibold">{props.judul}</h3>
                </div>
            </div>
        </React.Fragment>
    )
}