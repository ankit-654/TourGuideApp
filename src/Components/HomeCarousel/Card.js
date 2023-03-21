import "./CarouselCard.css";
import {MdLocationOn} from "react-icons/md"
export default function Card(props){
    return(
        <>
       <div className="card-resp">
       <div className="card">
      <img className="card-image" src={props.url} alt="img " />
      {/* name in 10-15 word limit */}
      <h2>{props.name}</h2>
       {/* description in 40-50 word limit */}
      <p>{props.description}</p>
      <span><MdLocationOn/>&nbsp;{props.location}</span>
      <p>
        <button><p>Explore</p></button>&nbsp;
        <button><p> Plan</p></button>
      </p>
    </div>
    </div>
      
        </>
    )
}