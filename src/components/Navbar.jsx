import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingBag, FaBars, FaTimes, FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const navLinks = [
        {title: "Clothings & Dresses", path: "/"},
        {title: "Shoes & Flipflops", path: "/shoes&flipflops"},
        {title: "Hoodies & Sweatshirts", path: "/hoodies"},
        {title: "Wedding & Party", path: "/"},
        {title: "Wristwatches", path: "/"},
        {title: "Face cap & Head warmers", path: "/"},
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
            <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
                <IoIosSearch className="w-5 h-5 hidden text-Black md:block cursor-pointer" />
                <h2 className="uppercase text-2xl font-semibold font-primaryFont tracking-wider">
                    <Link to="/">Spike</Link>
                </h2>

                {/* account andd shopping */}
                <div className="hidden sm:flex items-center gap-4 text-lg text-Black">
                    <div className="flex items-center gap-2">
                        <FaUser />
                        <p>Account</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaShoppingBag />
                        <p>Shopping</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <FaCartPlus />
                        <p>Cart</p>
                    </div>
                </div>

                {/* navlinks for mobile device */}
                <div className="sm:hidden">
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
                <ul className="hidden lg:flex justify-between items-center text-Black">
                    {navLinks.map(({title, path}) => (
                        <li key={title} className="hover:text-blue-500">
                            <NavLink to={path}>{title}</NavLink>
                        </li>
                    ))}
               </ul>
            </div>

            {/* only mobile item */}
            <div className="sm:hidden">
                <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
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
