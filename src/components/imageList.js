import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ImageList(){

    const [images, setImages] = useState();

    let getImages = async() => {
        await axios
            .get('/api/image_list')
            .then(images => {
                setImages(images.data);
                //console.log('Another console', images);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getImages();

    },[]);

    let delImage = async(key) => {
        await axios
            .post('/api/image_del', { key })
            .then(console.log('Deleted: ', { key }))
            .catch((err) => {
                console.log(err);
            })
    }

    function displayImages (ImageList){
        console.log(ImageList);
        return(
            <div className="imageList">
                {ImageList.map((value, index) => (
                    <div className="adminImages" key={value.photo}>
                        <img className="adminImage" src={"/images/" + value.photo} alt={value.imgdesc}></img>
                        <div className="photoDesc">{value.imgdesc}</div>
                        <button onClick={() => delImage(value.photo)}>Delete</button>
                    </div>
                ))}
            </div>
        )

    }

    
    if(images && !(ImageList === undefined)){
        return(
            <div>
                    {displayImages(images)}
            </div>
        );
    } else { 
        return(<></>);
    }
}

export default (ImageList);