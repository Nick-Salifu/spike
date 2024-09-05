import { Link } from "react-router-dom"
import black from "../../assets/images/black.jpg"
import woman from "../../assets/images/woman.jpg"

const companyLogo = [
    {id: 1, img: "Nick"},
    {id: 2, img: "Nicodemus"},
    {id: 3, img: "Salifu"},
    {id: 4, img: "Friday"},
    {id: 5, img: "Nicko"},
]

function Category() {
    return (
        <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
            <div>
                <ul className="flex items-center justify-around">
                    {companyLogo.map(({ id, img }) => (
                        <li key={id}>{img}</li>
                    ))}
                </ul>
            </div>

            {/* category grid */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
                <p className="bg-black text-white font-semibold rounded-sm inline-flex uppercase text-center p-2 md:p-1.5 md:-rotate-90">Explore new and popular styles</p>

                <div>
                    <Link to="/">
                        <img src={black} alt="" className="w-[40rem] hover:scale-105 transition-all duration-200" />
                    </Link>
                </div>

                <div className="md:w-1/2">
                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/"><img src={black} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                        <Link to="/"><img src={woman} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                        <Link to="/"><img src={woman} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                        <Link to="/"><img src={black} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
