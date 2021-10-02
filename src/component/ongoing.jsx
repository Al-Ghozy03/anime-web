import React from "react";

export default function Ongoing() {
    return(
        <React.Fragment>
            <div className="mb-4 px-10">
                <div>
                    <div style={{backgroundImage:`url("https://images7.alphacoders.com/115/thumb-1920-1155001.jpg")`}} className="bg-red-700 w-80 bg-cover rounded-2xl h-40">
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
                    <h3 className="text-2xl capitalize font-semibold">Tensei shitara Slime Datta <br /> Ken Season 2 Part 2</h3>
                </div>
                <h3 className="text-lg text-gray-600 capitalize">episode 13</h3>
            </div>
        </React.Fragment>
    )
}