import React from 'react';
import Notices from '../Notices';

//general pictures
import cabin1 from '../../pictures/cabin1.jpeg';
import camper1 from '../../pictures/camper1.png';
import river1 from '../../pictures/river1.jpeg';
import river2 from '../../pictures/river2.jpeg';
import trees1 from '../../pictures/trees1.webp';
//map pictures
import teepee1 from '../../pictures/teepee1.jpeg';
import mapBackground from '../../pictures/mapBackground.png';
import rvIcon from '../../pictures/rvIcon.jpeg';
import houseIcon from '../../pictures/houseIcon.jpeg';
import cabinIcon from '../../pictures/cabinIcon.png';

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
                <img className='mapBackground' src={mapBackground} alt="map"></img>
                <img className='teepee1 teepee' src={teepee1} alt="teepee icon"></img>
                <img className='teepee2 teepee' src={teepee1} alt="teepee icon"></img>
                <img className='rv rvIcon1' src={rvIcon} alt="rv icon"></img>
                <img className='rv rvIcon2' src={rvIcon} alt="rv icon"></img>
                <img className='rv rvIcon3' src={rvIcon} alt="rv icon"></img>
                <img className='houseIcon' src={houseIcon} alt="house icon"></img>
                <img className='cabinIcon' src={cabinIcon} alt="cabin icon"></img>
            </div>
            <Notices />

        </div>
    )
}

export default home;