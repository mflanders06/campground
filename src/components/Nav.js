

function Nav() {
    return (
        <div className="nav">
            <div className='leftButtons'>
                <button className='navButton'>Home</button>
                <button className='navButton'>Site Details</button>
            </div>
            <div>Campground Reservations</div>
            <div className='rightButtons'>
                <button className='navButton'>Login/Register</button>
            </div>
        </div>
    )
}

export default Nav;