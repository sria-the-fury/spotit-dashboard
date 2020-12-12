import React from 'react';
import BrandLogo from "../../assets/brand-logo/brand-logo.png";
import {AiOutlineMenu} from "react-icons/all"


const NavbarReactStrap = () => {
    return (
        <nav className='nav-custom'>

            <div className="container">
                <div className='side-menu-icon d-lg-none d-xl-none'>
                    <AiOutlineMenu/>
                </div>
                <div className='brand-logo'>
                    <img src={BrandLogo} className='brand-logo-img' alt='brand-logo'/>
                    <span className='brand-name'>SPOTiTUSA</span>

                </div>
                <div className='sidebar-list d-none d-lg-block'>
                    <ul className='navbar-ul'>
                        <li>
                            Home
                        </li>

                        <li>
                            Home
                        </li>

                        <li>
                            Home
                        </li>

                        <li>
                            Home
                        </li>
                    </ul>

                </div>


            </div>


        </nav>

    );
}

export default NavbarReactStrap;