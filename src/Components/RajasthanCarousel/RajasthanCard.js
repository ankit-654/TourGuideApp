import "./RajasthanCard.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
export default function RajasthanCard(props){
    return(
        <>
       <div className="card-resp">
       <div className="card">
      <img className="card-image" src={props.url} alt="product " />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>
        <button><p><RemoveRedEyeIcon className="explore-icon-size"/></p></button>
      </p>
    </div>
    </div>
      
        </>
    )
}