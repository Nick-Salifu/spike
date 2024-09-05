import { Link } from "react-router-dom";
import black from "../../assets/images/black.jpg";
import air from "../../assets/images/nike-air.jpg";
import woman from "../../assets/images/woman.jpg";


function NewsLetter() {
    return (
        <div className="bg-[#1e2832] bg-opacity-5 xl:px-28 px-4 py-16">
           <h2 className="title mb-8">Follow products and discount on Instagram</h2>

            <div className="flex items-center flex-wrap gap-4 justify-center mb-20">
                <Link to="/">
                    <img src={black} alt="" className="w-80" />
                </Link>
                <Link to="/">
                    <img src={woman} alt="" className="w-80" />
                </Link>
                <Link to="/">
                    <img src={air} alt="" className="w-80" />
                </Link>
                <Link to="/">
                    <img src={woman} alt="" className="w-80" />
                </Link>
                <Link to="/">
                    <img src={black} alt="" className="w-80" />
                </Link>
            </div>

            <div>
                <h2 className="title mb-8">Or subscribe to the newsletter</h2>
                <form className="md:w-1/2 mx-auto text-center">
                    <input type="email" name="email" id="email" placeholder="Enter your E-mail.." className="h-8 bg-transparent outline-none border-b-2 border-black w-full md:w-2/3 mb-5 placeholder:text-black/50 mr-4" />
                    <input type="submit" value={"Submit"} className="text-white bg-black py-1 px-6 rounded-sm" />
                </form>
            </div>
        </div>
    )
}

export default NewsLetter
