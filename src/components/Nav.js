import { Link } from 'react-router-dom';
import routes from '../routes';
import SiteMenu from './SiteMenu';

function Nav() {
    return (
        <div className="nav">
            <div className='leftButtons'>
                <Link to="/" className='navButton'><button>Home</button></Link>
                <SiteMenu />
            </div>
            <div>Campground Reservations</div>
            <div className='rightButtons'>
                <Link to="/login" className='navButton'><button>Login/Register</button></Link>
            </div>
        </div>
    )
}

export default Nav;