import React from "react";
import swal from "sweetalert";

export default function CarouselDataNo({url,judul,rating,sinopsis,slug,id}) {
  return (
    <React.Fragment>
      <div>
        <div
          style={{
            backgroundImage: `url(${url})`,
          }}
          className="bg-red-500 tinggi bg-cover rounded-3xl mx-6 shadow-lg"
        >
          <div className="tinggi bg-gradient-to-r from-black py-16 px-11 rounded-3xl">
            <h1 className="text-6xl mb-5 capitalize font-semibold text-white">
              {judul}
            </h1>
            <div className="flex mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10  w-10 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="text-3xl text-white">{rating}</p>
            </div>
            <div className="grid grid-cols-2">
              <p className="text-white text-xl">{sinopsis}</p>
            </div>

              <button onClick={()=>{
                swal("Warning", "Kamu harus login dahulu", "warning")
              }} className="bg-white my-20 rounded-full py-2 px-3 bg-opacity-20 w-48 h-14 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 text-white w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="capitalize col-span-2 text-white font-semibold text-xl py-1 ml-2">
                  watch now
                </p>
              </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
