import React from 'react';
import { Link, } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="sidebar-container">
            <div class="d-grid gap-2">
                <Link to="/home"><button class="btn margin btn-primary" type="button">HOME</button></Link>
                <Link to="/search"><button class="btn btn-primary" type="button">SEARCH</button></Link>
                <Link to="/favourites"><button class="btn btn-primary" type="button">Favourites</button></Link>
                <Link to="/Playlists"><button class="btn btn-primary" type="button">Playlists</button></Link>
            </div>
        </div>
    );
};

export default SideBar;