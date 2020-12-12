import React, {useState} from 'react';
import BrandLogo from "../../assets/brand-logo/brand-logo.png";
import {AiOutlineMenu} from "react-icons/all"
import SideNavbar from "./SideNavbar";
import {Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Navbar = () => {
    const [sideNav, setSideNav] = useState(false);
    const openSideNav = () => {
        setSideNav(true);
    };
    const closeSideNav = () => {
        setSideNav(false);
    };

    const location = useLocation();
    const getPathName = location.pathname;
    return (
        <nav className='nav-custom fixed-top'>

            <div className="container">
                <div className='side-menu-icon d-lg-none d-xl-none'>
                    <i className='menu-icon' onClick={() => openSideNav() }>
                        <AiOutlineMenu/>

                    </i>
                </div>
                <div className='brand-logo'>
                    <img src={BrandLogo} className='brand-logo-img' alt='brand-logo'/>
                    <span className='brand-name'>SPOTiTUSA</span>

                </div>
                <div className='sidebar-list d-none d-lg-block'>
                    <ul className='navbar-ul text-uppercase'>
                        <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                            <li className={getPathName === '/' ? 'active' : 'blank'}>
                                HOME

                            </li>
                        </Link>

                        <Link to='/post-jobs' style={{textDecoration: 'none', color: 'white'}}>
                            <li className={getPathName === '/post-jobs' ? 'active' : 'blank'}>
                                POST JOBS

                            </li>
                        </Link>

                        <Link to='/applications' style={{textDecoration: 'none', color: 'white'}}>
                            <li className={getPathName === '/applications' ? 'active' : 'blank'}>
                                Applications

                            </li>
                        </Link>

                        <Link to='/client-booking' style={{textDecoration: 'none', color: 'white'}}>
                            <li className={getPathName === '/client-booking' ? 'active' : 'blank'}>
                                Client Booking
                            </li>
                        </Link>
                    </ul>

                </div>


            </div>

            <SideNavbar isOpen={sideNav} closeSideNav={closeSideNav}/>


        </nav>

    );
}

export default Navbar;