"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; 
 
import { serverSideFunction } from "@/utils/server-utils"

export default function ClientRoutePage() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider>
    </div>
  );
}


// export default function ClientRoutePage(){
//     console.log("Client Route Rendered")
//     // const result=serverSideFunction();
//     return (
//         <>
//           <h1>Client Route Page</h1>
//           {/* <p>{result}</p> */}
//         </>
//     )
// }