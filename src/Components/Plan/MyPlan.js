
import './MyPlan.css'
import './PlanCard.css'
import PlanCard from './PlanCard'
import BottomBar from '../BottomBar'
export  const MyPlan =() => {
    return(
        <>
          <div className='hg-plan'>
                   <div className='plan-div'><a href='#'><img className='plan-icon' src='./assets/prev.png' alt='img'/></a></div>
                   <div className='plan-div'><span>My Plans</span></div>
                   <div className='plan-div'><a href='#'><img className='plan-icon' src='./assets/menui.png' alt='img'/></a></div>
           </div>
           <div className='plan-container'>
           <PlanCard/>
           <PlanCard/>
           <PlanCard/>
           </div>
            <BottomBar/>
        </>
    )
}