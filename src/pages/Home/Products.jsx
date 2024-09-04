import { useEffect, useState } from "react"
import { FaFilter } from "react-icons/fa"
import Cards from "../../components/Cards";

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [sortItems, setSortItems] = useState("default");
    const [selectedCategory, setSelectedCategory] = useState("all");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                setProducts(data)
                setFilteredItems(data)
            } catch (error) {
                console.log("Error Fetching:", error)
            }
        }
        fetchData();
    }, [])

    // to show filtered products
    const filterItems = (category) => {
        const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);

        setFilteredItems(filtered)
        setSelectedCategory(category)
    }

    // to show all products
    const showAll = () => {
        setFilteredItems(products);
        setSelectedCategory("all")
    }

    // sorting functionality
    const handleSorting = (option) => {
        setSortItems(option);

        // the logic for sorting
        let sortedItems = [...filteredItems];

        switch (option) {
            case "A-Z":
                sortedItems.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "Z-A":
                sortedItems.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "low-to-high":
                sortedItems.sort((a, b) => a.price - b.price);
                break;
            case "high-to-low":
                sortedItems.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        setFilteredItems(sortedItems);
    }

    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 mb-12">
            <h2 className="title">Or subscribe to the newsletter</h2>

            {/* products card section */}
            <div>
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8">
                    <div className="flex justify-start md:items-center md:gap-8 gap-4 flex-wrap">
                        <button onClick={showAll}>All Items</button>
                        <button onClick={() => filterItems("Dress")}>Clothings</button>
                        <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
                        <button onClick={() => filterItems("Bags")}>Bags</button>
                        <button onClick={() => filterItems("Shoes")}>Shoes</button>
                    </div>

                    <div className="flex justify-end mb-4 rounded-sm">
                        <div className="bg-black p-2">
                            <FaFilter className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <select
                                id="sort"
                                value={sortItems}
                                onChange={(e) => handleSorting(e.target.value)}
                                className="bg-black text-white rounded-sm px-2 py-1">
                                <option value="default">Default</option>
                                <option value="A-Z">A-Z</option>
                                <option value="Z-A">Z-A</option>
                                <option value="low-to-high">Low to High</option>
                                <option value="high-to-low">High-Low</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Cards filteredItems={filteredItems} />
            </div>
        </div>
    )
}

export default Products
