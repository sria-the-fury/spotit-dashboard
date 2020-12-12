import React from 'react';
import "../../css/side-navbar.css";
import {AiFillLeftCircle, AiFillHome,IoIosCreate, FaWpforms, FaCalendarCheck} from "react-icons/all";
import {Link, useLocation} from "react-router-dom";

const SideNavbar = (props) => {
    const {isOpen, closeSideNav} = props;
    let sideNav = document.getElementById('mySidenav');
    if(isOpen) sideNav.style.width = '250px';
    const closeSideNavButton = () => {
        sideNav.style.width = '0';
        closeSideNav();

    };

    const location = useLocation();
    const getPathName = location.pathname;

    return (
        <div id="mySidenav" className="sidenav">
            <span className="close-btn" onClick={() => closeSideNavButton()}><AiFillLeftCircle/></span>
            <div className='title-name-sidenav'>
                <span className='text-center'>
                    Dashboard
                </span>
            </div>
            <ul className="sidenav-ul text-uppercase">
                <li className={getPathName === '/' ? 'sidenav-active' : 'blank'} onClick={() => closeSideNavButton()}>
                    <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                        <i className='sidenav-icons'>
                            <AiFillHome/>
                        </i>
                        <span className='sidenav-icons-desc'>
                        Home
                    </span>
                    </Link>
                </li>

                <li className={getPathName === '/post-jobs' ? 'sidenav-active' : 'blank'} onClick={() => closeSideNavButton()}>
                    <Link to='/post-jobs' style={{textDecoration: 'none', color: 'white'}}>
                        <i className='sidenav-icons'>
                            <IoIosCreate/>
                        </i>
                        <span className='sidenav-icons-desc'>
                        POST JOBS
                    </span>
                    </Link>

                </li>

                <li className={getPathName === '/applications' ? 'sidenav-active' : 'blank'} onClick={() => closeSideNavButton()}>
                    <Link to='/applications' style={{textDecoration: 'none', color: 'white'}}>
                        <i className='sidenav-icons'>
                            <FaWpforms/>
                        </i>
                        <span className='sidenav-icons-desc'>
                        Applications
                    </span>
                    </Link>

                </li>

                <li className={getPathName === '/client-booking' ? 'sidenav-active' : 'blank'} onClick={() => closeSideNavButton()}>
                    <Link to='/client-booking' style={{textDecoration: 'none', color: 'white'}}>
                        <i className='sidenav-icons'>
                            <FaCalendarCheck/>
                        </i>
                        <span className='sidenav-icons-desc'>
                        Client Booking
                    </span>
                    </Link>
                </li>
            </ul>

        </div>
    );
}

export default SideNavbar;