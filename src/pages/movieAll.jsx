import React from "react";
import Header from "../component/header";
import DataMovieAll from "./dataMovieAll";

export default function LisstMovie() {
    return(
        <React.Fragment>
            <Header></Header>
            <div className="px-10 py-6 grid grid-cols-4">
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>
                <DataMovieAll></DataMovieAll>

            </div>
        </React.Fragment>
    )
}