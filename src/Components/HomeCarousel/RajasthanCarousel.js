import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

/// productData will be my array to store api data
/// axios will be called there and data will be stored in above array
/// store data will be shared to below const product

import { productData, responsive } from "./RajasthanCardData";
export default function RajasthanCard(){
    const product = productData.map((item) => (
        <Card
          name={item.name}
          url={item.imageurl}
          description={item.description}
          location={item.location}
          
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