import { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom"

function SingleProduct() {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                const product = data.filter((p) => p.id == id)
                // console.log(product)
                setProducts(product[0])
            } catch (error) {
                console.log("Error Fetching:", error)
            }
        }
        fetchData();
        window.scrollTo({top: 0, behavior: "smooth"})
    }, [id])

    const { title, status, price, category, image } = products;

    return (
        <div className="mt-28 max-w-screen-2xl mx-auto container xl:px-28 px-4">
            <div className="p-3 max-w-7xl mx-auto">

                <div className="mt-5">
                    <Link to="/" className="text-gray-600">Home</Link>
                    <Link to="/shop" className="font-bold text-black">/shop</Link>
                </div>
                <div className="mt-4 sm:mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-max">
                        <div>
                            <img src={image} alt="" className="w-full" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-semibold text-left capitalize my-6">{title}</h1>
                            <p className="mt-3 text-base text-justify text-gray-600 sm:text-left sm:mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus a ea explicabo, porro alias eveniet harum impedit error corporis quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptas nihil impedit.</p>

                            <span className="text-yellow-400 flex my-2 text-xl gap-1 sm:my-4 items-center">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </span>
                            <p className="text-xl font-semibold text-blue-500 sm:text-2xl">${price}</p>

                            <div className="mt-4">
                                <div className="text-left flex flex-col gap-2 w-full">
                                    <label className="font-semibold">Quantity</label>
                                    <input type="number" name="price" id="price" defaultValue={1} required className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 focus:border-blue-500" />
                                </div>
                                <div className="w-full text-left my-4">
                                    <button className="flex items-center justify-center gap-2 w-full bg-blue-500 px-4 py-3 font-bold text-white border border-blue-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-blue-500 lg:m-0 md:px-6"><span>Confirm Order</span><FaArrowAltCircleRight /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-black/75 mt-12 space-y-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam deleniti quod ipsa repellat! Magnam, dolor dicta. Repudiandae obcaecati culpa facilis, beatae architecto illo veritatis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam deleniti quod ipsa repellat! Magnam, dolor dicta. Repudiandae obcaecati culpa facilis, beatae architecto illo veritatis!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quisquam deleniti quod ipsa repellat! Magnam, dolor dicta. Repudiandae obcaecati culpa facilis, beatae architecto illo veritatis!</p>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct
