import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RajasthanCard from "./RajasthanCard";

import { productData, responsive } from "./RajasthanCardData";
export default function RajasthanCarousel(){
    
    const product = productData.map((item) => (
        <RajasthanCard
          name={item.name}
          url={item.imageurl}
        //   price={item.price}
          description={item.description}
        />
      ));
    
      return (
        <div className="App">
          <h4>The very best of Rajasthan</h4>
          <Carousel showDots={true} responsive={responsive}>
            {product}
          </Carousel>
        </div>
      );
}