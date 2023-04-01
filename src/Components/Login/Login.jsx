
import "./Login.css"
import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Login(){
    const navigate=useNavigate();
    const Submit = () => {
        var email=txtemail.current.value;
        var password=txtpassword.current.value;
        if(email=="ankit" && password=="ankit"){
            navigate("/explore");
        }
    }

    const txtemail=useRef();
    const txtpassword=useRef();
    return(
        <>
            <div className="login-box">
                <div className="login-i">
                    <img className="login-i-resp" src="https://cdni.iconscout.com/illustration/premium/thumb/tour-guide-lady-and-group-of-tourists-6311379-5209749.png" alt="img"   />
                </div>
                
                
                <div className="input-box">
                   <div className="input-content">
                   <p>Login / Signup</p>
                   <hr/>
                    <input type="text" className="form-control" placeholder="Email" ref={txtemail} />
                    <input type="text" className="form-control" placeholder="Password" ref={txtpassword} />
                    <div className="login-btn-grid">
                    <div className="login-btn-resp">
                    <button className="btn-login" onClick={() => Submit()}>Login</button> |
                    <button className="btn-login">Signup</button>
                    </div>
                   </div>
                   <div>
                    <input type="checkbox" />  Remember me
                   </div>
                   <hr/>
                   <div>
                    <Button className="btn-forget" variant="primary">Forgot Password !</Button>
                   </div>
                   </div>
                   
                </div>
            </div>
        </>
    )
}