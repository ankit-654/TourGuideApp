import Card from "./Card"
import { uttrakhandData ,responsive} from "./UttrakhandData"
import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function UttrakhandCarousel(){

    const uttarkhand=uttrakhandData.map((item) => (
    <Card
        name={item.name}
          url={item.imageurl}
          description={item.description}
          location={item.location}
    />
    ));
    return(
        <>
           <div className="App">
            <h4>The very best of Uttrakhand</h4>
            <Carousel showDots={true} responsive={responsive}>
                {uttarkhand}
            </Carousel>
           </div>
        </>
    )
}