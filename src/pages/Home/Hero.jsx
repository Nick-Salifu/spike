import { FaShoppingBag } from "react-icons/fa"
import store from "../../assets/images/store.jpg"

function Hero() {
    return (
        <div className="bg-primaryBG py-12 xl:px-28 px-4">
            <div className="flex flex-col-reverse md:flex-row justify-between gap-14 py-24 items-center">
                {/* left part of hero */}
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-light mb-5">Collections</h1>
                    <p className="text-xl mb-7">You can explore and shop many different collections from various brands here</p>
                    <button className="bg-Black hover:bg-blue-500 text-white px-6 py-2 font-semibold rounded-sm flex items-center gap-2">
                        <FaShoppingBag className="inline-flex" />
                        Shop Now
                    </button>
                </div>

                {/* right part of hero */}
                <div className="md:w-1/2">
                    <img src={store} alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default Hero
