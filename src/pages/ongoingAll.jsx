import React from "react";
import Header from "../component/header";
import DataOnGoingAll from "./dataOnGoingAll";

export default function ListOngoing() {

    const [going, SetGoing] = React.useState([
        {
            id:5,
            url:"https://images4.alphacoders.com/978/thumb-1920-978847.jpg",
            judul:"Tensei Shitara Slime Datta Ken Season 2 Part 2",
            episode:"13",
        },
        {
            id:6,
            url:"https://images3.alphacoders.com/115/thumb-1920-1154064.jpg",
            judul:"record of ragnarok",
            episode:"16",
        },
        {
            id:7,
            url:"",
            judul:"Mushoku Tensei: Isekai Ittara Honki Dasu",
            episode:"11",
        },
        {
            id:8,
            url:"https://images4.alphacoders.com/957/thumb-1920-957927.png",
            judul:"GoToubun no Hanayome",
            episode:"13",
        },
    ])

    return(
        <React.Fragment>
            <Header></Header>
            <div className="px-10 py-6 grid grid-cols-4">
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
                <DataOnGoingAll></DataOnGoingAll>
            </div>
        </React.Fragment>
    )
}