import React from 'react';

// ------ NPM Components --------------------------------------------
import Slider from "react-slick";
import {Spotify} from "react-spotify-embed"
// ------------------------------------------------------------------

// ------ Images ----------------------------------------------------
import SH_1 from "../../src/images/SH_1.png"
import SH_2 from "../../src/images/SH_2.png"
// ------------------------------------------------------------------

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
                <div>
                    <Spotify link="https://open.spotify.com/track/5tw4Kqm7Pg9CYj9Xqk2VFp?si=896c00a843424c7c">
                    </Spotify>
                </div>
           </Slider>
        </div>
    );
}