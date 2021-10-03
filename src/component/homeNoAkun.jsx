import React from "react";
import Movie from "./movie";
import HeaderNo from "./headerNo";
import CarouselNo from "./carouselImageNo";
import OngoingNo from "./ongoingNo";
import swal from "sweetalert";
import MovieNo from "./movieNo";
export default function HomeNoAkun() {
  const [onGoing, setOnGoing] = React.useState([
    {
      id: 5,
      url: "https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
      judul: "Tensei Shitara Slime Datta Ken Season 2 Part 2",
      slug: "Tensei-Shitara-Slime-Datta-Ken-Season-2-Part-2",
      episode: "8",
    },
    {
      id: 6,
      url: "https://images4.alphacoders.com/117/thumb-1920-1172553.jpg",
      judul: "the detective has already dead",
      slug: "the-detective-has-already-dead",
      episode: "7",
    },
    {
      id: 7,
      url: "https://images4.alphacoders.com/957/thumb-1920-957927.png",
      judul: "gotoubun no hanayome",
      slug: "gotoubun-no-hanayome",
      episode: "10",
    },
    {
      id: 8,
      url: "https://images.alphacoders.com/110/thumb-1920-1108683.jpg",
      judul: "mushoku tensei",
      slug: "mushoku-tensei",
      episode: "19",
    },
  ]);

  const [movie, setMovie] = React.useState([
    {
      id: 13,
      url: "https://images4.alphacoders.com/687/thumb-1920-687986.jpg",
      judul: "kimi no nawa",
      slug: "kimi-no-nawa",
    },
    {
      id: 14,
      url: "https://images5.alphacoders.com/100/thumb-1920-1003363.jpg",
      judul: "tenki no ko",
      slug: "tenki-no-ko",
    },
    {
      id: 15,
      url: "https://images4.alphacoders.com/738/thumb-1920-738316.jpg",
      judul: "koe no katachi",
      slug: "koe-no-katachi",
    },
    {
      id: 16,
      url: "https://images6.alphacoders.com/115/thumb-1920-1150499.png",
      judul: "kimetsu no yaiba mugen train",
      slug: "kimetsu-no-yaiba-mugen-train",
    },
  ]);

  return (
    <React.Fragment>
      <HeaderNo></HeaderNo>
      <CarouselNo></CarouselNo>
      <h1 className="text-3xl capitalize px-14 font-semibold mb-6">ongoing</h1>
      <div className="grid grid-cols-4 px-11">
        {onGoing?.map((i, key) => (
          <OngoingNo
            key={key}
            url={i.url}
            judul={i.judul}
            episode={i.episode}
            slug={i.slug}
            id={i.id}
          ></OngoingNo>
        ))}
      </div>
      <div className="flex item-end justify-end px-11 ">
      <button onClick={()=>{
            swal("Warning", "Kamu harus login dahulu", "warning");
        }} className="bg-gradient-to-r shadow-md from-blue-700 to-blue-500 w-36 rounded-full h-12 text-center text-xl font-semibold text-white py-3">More</button>
      </div>
      <h1 className="text-3xl capitalize px-14 font-semibold mb-6">movie</h1>
      <div className="grid grid-cols-4 px-11">
        {movie?.map((i, key) => (
          <MovieNo
            key={key}
            judul={i.judul}
            slug={i.slug}
            id={i.id}
            url={i.url}
          ></MovieNo>
        ))}
      </div>
      <div className="flex item-end justify-end px-11 pb-8">
        <button onClick={()=>{
            swal("Warning", "Kamu harus login dahulu", "warning");
        }} className="bg-gradient-to-r shadow-md from-blue-700 to-blue-500 w-36 rounded-full h-12 text-center text-xl font-semibold text-white py-3">More</button>
      </div>
    </React.Fragment>
  );
}
