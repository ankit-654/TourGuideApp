import  Carousel  from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card";

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