import { IoIosSearch } from "react-icons/io";
import { FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const navLinks = [
        {title: "Jewelries & Accessories", path: "/"},
        {title: "Clothings & shoes", path: "/"},
        {title: "Home & Living", path: "/"},
        {title: "Wedding & Party", path: "/"},
        {title: "Toys and Entertainments", path: "/"},
        {title: "Craft Supplies & Tools", path: "/"},
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0">
            <nav className="flex items-center justify-between container md:py-4 pt-6 pb-3">
                <IoIosSearch className="w-5 h-5 hidden text-Black md:block cursor-pointer" />
                <h2 className="uppercase text-2xl font-semibold font-primaryFont tracking-wider">spike</h2>

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
                            <Link to="/">{title}</Link>
                        </li>
                    ))}
               </ul>
            </div>

            {/* only mobile item */}
            <div className="sm:hidden">
                <ul className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"}`}>
                        {navLinks.map(({title, path}) => (
                            <li key={title} className="hover:text-blue-500 my-3 cursor-pointer">
                                <Link to="/">{title}</Link>
                            </li>
                        ))}
                </ul>
            </div>
        </header>
    )
}

export default Navbar
