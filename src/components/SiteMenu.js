import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import * as actions from '../Store/Actions';

function SiteMenu(){
    /*
    const mapStatetoProps = state => {
        return{
            selectedSite: state.selectedSite
        }
    }

    const mapDispatchtoProps = dispatch => {
        return {
            SiteButton: () => dispatch({ type: "Site change" })
        }
    }
    */

    function buttonClick(site){
        if      (site === 'main')  { actions.siteChangeMain() }
        else if (site === 'house') { actions.siteChangeHouse() }
        else if (site === 'teepee'){ actions.siteChangeTeepee() }
        else if (site === 'rv')    { actions.siteChangeRV() }
        else if (site === 'cabin') { actions.siteChangeCabin() }
        
        //console.log(store.getState)
    }

    const [showMenu, setShowMenu] = useState(false);

    function handleMenu(){
        setShowMenu(!showMenu);
    }
    return (
        <>
            <button onClick={handleMenu}>Site Details</button>
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