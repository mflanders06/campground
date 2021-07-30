import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

function SiteMenu(){

    const [showMenu, setShowMenu] = useState(false);
    console.log('Here is my console:', showMenu);
    return (
        <>
            <button>Site Details</button>
            {
                showMenu ? (
                    <div className="siteMenu">
                    <Link to="/" ><button>House</button></Link>
                    <button>Cabin</button>
                    <button>Teepee #1</button>
                    <button>Teepee #2</button>
                    <button>RV Site #1</button>
                    <button>RV Site #2</button>
                    <button>RV Site #3</button>
                </div>
                )
                : ( null )
            }

        </>
    );
}

export default SiteMenu;