import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import * as actions from '../Store/Actions';
import store from '../Store/Store';
import {connect} from 'react-redux';

function SiteMenu(props){

    /*
    function buttonClick(site){
        if      (site === 'main')  { props.siteChangeMain() }
        else if (site === 'house') { props.siteChangeHouse() }
        else if (site === 'teepee'){ props.siteChangeTeepee() }
        else if (site === 'rv')    { props.siteChangeRV() }
        else if (site === 'cabin') { props.siteChangeCabin() }
        
        console.log(store.getState())
    }
    */

    function buttonClickMain(){
        props.siteChangeMain() 
       return 
   }

    function buttonClickHouse(){
         props.siteChangeHouse() 
        return 
    }

    function buttonClickTeepee(){
        props.siteChangeTeepee() 
       return 
   }

   function buttonClickRV(){
        props.siteChangeRV() 
        return 
    }

    function buttonClickCabin(){
        props.siteChangeCabin() 
        return 
    }

    const [showMenu, setShowMenu] = useState(false);

    function handleMenu(){
        setShowMenu(!showMenu);
    }
    return (

        <>
                {console.log(store.getState())}
            <button onClick={handleMenu}>Site Details</button>
            {
                showMenu ? (
                    <div className="siteMenu">
                    <Link to="/siteDetails" ><button onClick={buttonClickHouse}  >House</button> </Link>
                    <Link to="/siteDetails" ><button onClick={buttonClickCabin}  >Cabin</button> </Link>
                    <Link to="/siteDetails" ><button onClick={buttonClickTeepee} >Teepee</button></Link>
                    <Link to="/siteDetails" ><button onClick={buttonClickRV}     >RV</button>    </Link>
                </div>
                )
                : ( null )
            }

        </>
    );
}
let mapDispatchtoProps = {
    siteChangeHouse:  actions.siteChangeHouse,
    siteChangeCabin:  actions.siteChangeCabin,
    siteChangeMain:   actions.siteChangeMain,
    siteChangeRV:     actions.siteChangeRV,
    siteChangeTeepee: actions.siteChangeTeepee
}
export default connect(undefined, mapDispatchtoProps) (SiteMenu);