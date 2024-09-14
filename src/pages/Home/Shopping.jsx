import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shopping() {
    const [hoodie, setHoodie] = useState([]);
    const [shoes, setShoes] = useState([]);
    const [wristwatches, setWristwatches] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/products.json");
                const data = await response.json();
                const product = data.filter((p) => p.category === "Hoodies")
                const itemOne = data.filter((p) => p.category === "Shoes")
                const itemTwo = data.filter((p) => p.category === "Wristwatches")
                // console.log(product)
                setHoodie(product)
                setShoes(itemOne)
                setWristwatches(itemTwo)
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
                    <h1 className="title">Welcome to the Shopping page</h1>
                    <p className="max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore, accusantium minus pariatur vero dignissimos illum. Iusto eos in nobis quia veniam sint, enim deserunt! Lorem ipsum dolor sit amet.</p>
                </div>

                {/* add magin top to the parent div */}
                <div>
                    <div>
                        <h1 className="text-3xl font-headerFont font-semibold">Hoddie Section</h1>

                        <div className="mt-4 sm:mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-max gap-10">
                                {hoodie.map((hody) => (
                                    <div key={hody.id}>
                                        <div>
                                            <Link to={`/shop/${hody.id}`}>
                                                <img src={hody.image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-xl font-semibold text-left capitalize my-6">{hody.title}</h1>
                                            <p className="text-xl font-semibold text-blue-500 sm:text-2xl">${hody.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-3xl font-headerFont font-semibold">Shoes Section</h1>

                        <div className="mt-4 sm:mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-max gap-10">
                                {shoes.map((shoe) => (
                                    <div key={shoe.id}>
                                        <div>
                                            <Link to={`/shop/${shoe.id}`}>
                                                <img src={shoe.image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-xl font-semibold text-left capitalize my-6">{shoe.title}</h1>
                                            <p className="text-xl font-semibold text-blue-500 sm:text-2xl">${shoe.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h1 className="text-3xl font-headerFont font-semibold">Wristwatches Section</h1>

                        <div className="mt-4 sm:mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 h-max gap-10">
                                {wristwatches.map((watch) => (
                                    <div key={watch.id}>
                                        <div>
                                            <Link to={`/shop/${watch.id}`}>
                                                <img src={watch.image} alt="" />
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <h1 className="text-xl font-semibold text-left capitalize my-6">{watch.title}</h1>
                                            <p className="text-xl font-semibold text-blue-500 sm:text-2xl">${watch.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Shopping
