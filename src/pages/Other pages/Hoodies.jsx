import { useEffect, useState } from "react";

function Hoodies() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                const product = data.filter((p) => p.category === "Hoodies")
                // console.log(product)
                setItems(product)
            } catch (error) {
                console.log("Error Fetching:", error)
            }
        }
        fetchData();
    }, [])

    return (
        <div className="mt-28 max-w-screen-2xl mx-auto container xl:px-28 px-4">
            <div className="py-5 max-w-7xl">
                <div className="flex flex-col items-center text-center">
                    <h1 className="title">Welcome to the Hoodies section</h1>
                    <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore, accusantium minus pariatur vero dignissimos illum. Iusto eos in nobis quia veniam sint, enim deserunt! Lorem ipsum dolor sit amet.</p>
                </div>

                <div className="mt-4 sm:mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-max gap-10">
                        {items.map((item) => (
                            <div key={item.id}>
                                <div>
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <h1 className="text-xl font-semibold text-left capitalize my-6">{item.title}</h1>
                                    <p className="text-xl font-semibold text-blue-500 sm:text-2xl">${item.price}</p>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hoodies
