import { FaShoppingBag } from "react-icons/fa"
import woman from "../../../public/images/woman.jpg"

function Hero() {
    return (
        <div className="px-4 py-12 bg-primaryBG xl:px-28">
            <div className="flex flex-col-reverse items-center justify-between py-24 md:flex-row gap-14">
                {/* left part of hero */}
                <div className="md:w-1/2">
                    <h1 className="mb-5 text-5xl font-light">Collections</h1>
                    <p className="max-w-md text-xl mb-7">Shop the latest trends, exclusive deals, and curated collections just for you. You can explore and shop many different collections from various brands here. You can hit the shop now button below and start shopping. Happy shopping!</p>
                    <button className="flex items-center gap-2 px-6 py-2 font-semibold text-white rounded-sm bg-Black hover:bg-blue-500">
                        <FaShoppingBag className="inline-flex" />
                        Shop Now
                    </button>
                </div>

                {/* right part of hero */}
                <div className="md:w-1/2">
                    <img src={woman} alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero
