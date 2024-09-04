import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 my-20">
            <div>
                <div>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam dolorum alias laboriosam odio voluptatum.</h3>
                    <div className="flex items-center gap-2">
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
