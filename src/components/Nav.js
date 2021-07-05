import { HashRouter, Link } from 'react-router-dom';
import routes from '../routes';

function Nav() {
    return (
        <div className="nav">
            <div className='leftButtons'>
                <Link to="/" className='navButton'>Home</Link>
                <Link to="/siteDetails" className='navButton'>Site Details</Link>
            </div>
            <div>Campground Reservations</div>
            <div className='rightButtons'>
                <Link to="/login" className='navButton'>Login/Register</Link>
            </div>
        </div>
    )
}

export default Nav;