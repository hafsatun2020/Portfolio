import React from "react";
import twimba from "./images/twimba.png"
export default function Card(props) {
    console.log(props.img)
    return (
        <>
        <div key={props.id} className="card">
        <img src={`${props.img}`} alt="" />
        <p>{props.tag}</p>
        <a href="">Demo</a>
        <a href="github.com/hafsatun2020"><i className="fa-brands fa-github"></i></a>
        </div>
        </>
    )
}