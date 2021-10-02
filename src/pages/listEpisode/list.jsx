import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export default function Episode(props) {
      let {id} = useParams()
    return(
        <React.Fragment>
            <Link to={`/home/list-episode/${id}/video`} className="text-xl capitalize">{props.eps}</Link>
        </React.Fragment>
    )
}