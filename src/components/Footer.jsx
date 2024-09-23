import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 my-20">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                <div className="flex flex-col gap-6">
                    <h3 className="max-w-sm text-Black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam dolorum alias laboriosam odio voluptatum.</h3>
                    <div className="flex items-center gap-2">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-5 uppercase">Catalog</h3>
                    <ul className="text-md text-Black cursor-pointer flex flex-col gap-2">
                        <li>Necklace</li>
                        <li>Hoodies</li>
                        <li>Jewelry Box</li>
                        <li>T-Shirt</li>
                        <li>Jacket</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-5 uppercase">Customer Service</h3>
                    <ul className="text-md text-Black cursor-pointer flex flex-col gap-2">
                        <Link to="/contact">
                            <li>Contact Us</li>
                        </Link>
                        <li>Track Order</li>
                        <li>Product Care & repair</li>
                        <li>Book and Appointment</li>
                        <li>Shipping & Returns</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-5 uppercase">About Us</h3>
                    <ul className="text-md text-Black cursor-pointer flex flex-col gap-2">
                        <li>Our Producers</li>
                        <li>Sitemap</li>
                        <li>FAQ</li>
                        <li>About Us</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
