import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/main_blue.png';
import ModalPremade from './ModalPremade';

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Portofolio', path: '/portfolio' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <>
            <div className="navbar sticky top-0 z-50 bg-[#FEF7E7] shadow-md lg:px-20 lg:py-3">
                {/* Start: Logo & Dropdown */}
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Hamburger untuk mobile */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        {/* Dropdown Mobile */}
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 p-2 shadow w-100"
                        >
                            {menuItems.map((item) => (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'text-[#00AEEF] cursor-pointer'
                                                : 'text-[#232326] hover:text-[#00AEEF] cursor-pointer'
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Logo */}
                    <NavLink to="/" className="btn btn-ghost">
                        <img src={Logo} alt="Logo" className="h-8 lg:h-10 w-auto lg:mr-2" />
                    </NavLink>
                </div>

                {/* Center: Menu Desktop */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-regular text-lg text-[#232326] flex items-center gap-x-3">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-[#00AEEF] font-bold hover:bg-transparent cursor-pointer'
                                            : 'hover:text-[#00AEEF] hover:bg-transparent cursor-pointer'
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* End: Button Premade */}
                <div className="navbar-end">
                    <button
                        className="btn bg-[#00AEEF] hover:bg-sky-600 text-[#FEF7E7] text-[17px] rounded-md lg:px-8 lg:py-4"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Premade
                    </button>
                </div>
            </div>
            <ModalPremade isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default Navbar;
