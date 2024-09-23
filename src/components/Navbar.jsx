import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingBag, FaBars, FaTimes, FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const navLinks = [
        {title: "Clothings & Dresses", path: "/"},
        {title: "Shoes & Flipflops", path: "/shoes&flipflops"},
        {title: "Hoodies & Sweatshirts", path: "/hoodies"},
        {title: "Wedding & Party", path: "/weddings"},
        {title: "Wristwatches", path: "/wristwatches"},
        {title: "Face cap & Head warmers", path: "/facecap"},
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    
    const handleClickOutside = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className="max-w-screen-2xl xl:px-28  absolute top-0 right-0 left-0">
            <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3 px-4">
                <h2 className="uppercase text-2xl font-semibold font-headerFont tracking-wider">
                    <Link to="/">Spike</Link>
                </h2>
                <form className="relative hidden md:block">
                    <input type="search" className="xl:w-[28rem] md:w-72 px-4 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="search" />
                    <IoIosSearch className="w-5 h-5 hidden text-Black md:block cursor-pointer absolute top-2 right-0 mr-1" />
                </form>             

                {/* account andd shopping */}
                <div className="hidden sm:flex items-center gap-4 text-lg text-Black">
                    <NavLink to="/login" className="flex items-center gap-2 hover:text-blue-500">
                        <FaUser />
                        <p>Account</p>
                    </NavLink>

                    <NavLink to="/shopping" className="flex items-center gap-2 hover:text-blue-500">
                        <FaShoppingBag />
                        <p>Shopping</p>
                    </NavLink>

                    {/* <div className="flex items-center gap-2 relative">
                        <div className="bg-blue-500 h-4 w-4 flex items-center justify-center rounded-full z-10 absolute top-3 right-5 text-left">
                            <p className="font-semibold text-sm text-white">0</p>
                        </div>
                        <FaCartPlus className="" />
                        <p>Cart</p>
                    </div> */}
                    <NavLink to="/cart" className="flex items-center gap-2 hover:text-blue-500">
                        <div className="relative">
                            <FaCartPlus className="" />
                            <div className="bg-blue-500 h-[15px] w-[15px] flex items-center justify-center rounded-full z-10 absolute -top-[14px] -right-2 text-left">
                                <p className=" text-[11px] text-white">0</p>
                            </div>
                        </div>                
                        <p>Cart</p>
                    </NavLink>
                </div>

                {/* navlinks for mobile device */}
                <div className="lg:hidden cursor-pointer">
                    <button onClick={toggleMenu}>
                        {
                            isMenuOpen ? <FaTimes className="w-5 h-5 text-Black" /> : <FaBars className="w-5 h-5 text-Black" />
                        }
                    </button>
                </div>
            </nav>

            <hr />

            {/* the nav links */}
            <div className="mt-4">
                <ul className="hidden xl:flex justify-between items-center text-Black">
                    {navLinks.map(({title, path}) => (
                        <li key={title} className="hover:text-blue-500">
                            <NavLink to={path}>{title}</NavLink>
                        </li>
                    ))}
               </ul>
            </div>

            {/* only mobile item */}
            {/* <div className="sm:hidden">
                <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
                        {navLinks.map(({title, path}) => (
                            <li key={title} className="hover:text-blue-500 my-3 cursor-pointer">
                                <NavLink to={path}>{title}</NavLink>
                            </li>
                        ))}
                </ul>
            </div> */}

            <div className="sm:hidden flex flex-col relative">
                {isMenuOpen && <div onClick={handleClickOutside} className="h-full w-full bg-black/25 fixed top-0"></div>}
                <ul className={`bg-Black fixed top-0 h-screen max-w-full transform transition-transform duration-700 delay-100 z-50 right-0 w-[60%] text-white px-4 py-2 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex justify-between items-center pt-4 pb-3">
                        <h2 className="uppercase text-2xl font-semibold font-headerFont tracking-wider">
                            <Link to="/">Spike</Link>
                        </h2>

                        <button>
                            <FaTimes onClick={toggleMenu} className="w-5 h-5 text-white" />
                        </button>
                    </div>


                    {navLinks.map(({title, path}) => (
                        <li key={title} className="hover:text-blue-500 my-3 cursor-pointer">
                            <NavLink to={path}>{title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export default Navbar
