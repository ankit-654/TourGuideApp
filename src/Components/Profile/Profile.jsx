
import './Profile.css'
// import ProfileData from './ProfileData'
export default function Profile(props){
        
    return(
        <>   
       
           <div className='profile'>
           <div className='head-grid'>
                   <div className='resp-div'><a href='#'><img className='head-icon' src='./assets/prev.png' alt='img'/></a></div>
                   <div className='resp-div'><span>Profile</span></div>
                   <div className='resp-div'><a href='#'><img className='head-icon' src='./assets/menui.png' alt='img'/></a></div>
           </div>
           {/* /// PROFILE PIC VIEW */}
           <div className='img-resp'>
            <img className='profile-pic' src='./assets/ankit.jpeg' alt='img'/>
           </div>
           
           <div className='profile-data'>
                <div className='first-name'>
                                <p> Ankit</p>  &nbsp;
                                {/* <img className='profile-head' src='./assets/hey.png' alt='img'/> */}
                                        
                </div>
                <div className='profile-content'>
                        <div className='profile-content-resp'>
                        <img className='same-icon' src='./assets/person.png' alt='img' />
                        </div>
                        <div className='profile-content-resp'>
                        Ankit Anand
                        </div>
                </div>
                <div className='profile-content'>
                        <div className='profile-content-resp'>
                        <img className='same-icon' src='./assets/mobile.png' alt='img'/>
                        </div>
                        <div className='profile-content-resp'>
                        9128010654
                        </div>
                </div>
                <div className='profile-content'>
                        <div className='profile-content-resp'>
                        <img className='same-icon' src='./assets/email.png' alt='img'/>
                        </div>
                        <div className='profile-content-resp'>
                        ankitanandbp@gmail.com
                        </div>
                </div>
                <div className='profile-content'>
                        <div className='profile-content-resp'>
                        <img className='same-icon' src='./assets/location.png' alt='img'/>
                        </div>
                        <div className='profile-content-resp'>
                        Keshavnagar,Manjari
                        </div>
                </div>
                <div className='profile-content'>
                        <div className='profile-content-resp'>
                        <img className='same-icon' src='./assets/description.png' alt='img'/>
                        </div>
                        <div className='profile-content-resp'>
                        danckjhcsiuchnkjnkdjhcadoiuhcak
                        </div>
                </div>
            </div>
        </div> 
        </>
    )
}