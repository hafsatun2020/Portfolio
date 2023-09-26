import React from "react";
import twimba from "./images/twimba.png"
export default function Card(props) {
    console.log(props.github)
    return (
        <>
        <div key={props.id} className="card">
        <img src={`${props.img}`} alt="" />
        <p>{props.tag}</p>
        <a href={`${props.demo}`}>Demo</a>
        <a href={`${props.github}`}><i className="fa-brands fa-github"></i></a>
        </div>
        </>
    )
}