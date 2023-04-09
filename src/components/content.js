import React from 'react';
import About from './about.js';
import Slider from "react-slick";

import SH_1 from "../../src/images/SH_1.png"
import SH_2 from "../../src/images/SH_2.png"

export default function Content(props){

    const pics = document.getElementsByClassName("slider_img")

    const settings = {
       dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true 
    };

    return(
        <div class="Content">
           <Slider class='slider'>
                <div class='slick_img'>
                    <img src={SH_1}/>
                </div>
                <div class='slick_img'>
                    <img src={SH_2}/>
                </div>
           </Slider>
        </div>
    );
}