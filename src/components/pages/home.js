import React from 'react';
//general pictures
import cabin1 from '../../pictures/cabin1.jpeg';
import camper1 from '../../pictures/camper1.png';
import river1 from '../../pictures/river1.jpeg';
import river2 from '../../pictures/river2.jpeg';
import trees1 from '../../pictures/trees1.webp';
//map pictures
import teepee1 from '../../pictures/teepee1.jpeg';

function home() {
    return(
        <div className="main">
            <div className="pictures">
                <img className='picture' src={cabin1} alt="Cabin"></img>
                <img className='picture' src={camper1} alt="Cabin"></img>
                <img className='picture' src={river1} alt="Cabin"></img>
                <img className='picture' src={river2} alt="Cabin"></img>
                <img className='picture' src={trees1} alt="Cabin"></img>
            </div>
            <div className="map">

            </div>
            <div className="notice"></div>

        </div>
    )
}

export default home;