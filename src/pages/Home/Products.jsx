import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import Cards from "../../components/Cards";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("products.json");
                const data = await response.json();
                setProducts(data)
            } catch (error) {
                console.log("Error Fetching:", error)
            }
        }
        fetchData();
    }, [])

    console.log(products)

    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-12">
            <h2 className="title">Or subscribe to the newsletter</h2>

            {/* products card section */}
            <div>
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
                    <div className="flex justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        <button>All Items</button>
                        <button>Clothings</button>
                        <button>Hoodies</button>
                        <button>Bags</button>
                    </div>

                    <div className="flex justify-end mb-4 rounded-sm">
                        <div className="bg-black p-2">
                            <FaFilter className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <select className="bg-black text-white rounded-sm px-2 py-1">
                                <option value="default">Default</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High-Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Cards filteredItems={products} />
            </div>
        </div>
    )
}

export default Products
