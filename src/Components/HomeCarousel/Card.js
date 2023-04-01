import "./CarouselCard.css";
import {MdLocationOn} from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
export default function Card(props){
  const navigate=useNavigate();
    const gotoView = () => {
      navigate('/view')
    }
 

  const img=useRef();
  const cname=useRef();
  const description=useRef();
  const clocation=useRef();
    return(
        <>
       <div className="card-resp">
       <div className="card">
      <img className="card-image" ref={img} src={props.url} alt="img " />
      {/* name in 10-15 word limit */}
      <h2 ref={cname}>{props.name}</h2>
       {/* description in 40-50 word limit */}
      <p ref={description}>{props.description}</p>
      <span ref={clocation}><MdLocationOn/>&nbsp;{props.location}</span>
      <p>
        <button onClick={() => gotoView()}><p>Explore</p></button>&nbsp;
        <button><p> Plan</p></button>
      </p>
    </div>
    </div>
      
        </>
    )
}