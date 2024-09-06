
function Collections() {
    return (
        <div className="bg-[url('../../../public/images/zara.jpg')] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20">
            <div className="h-[560px] flex justify-between md:flex-row items-center">
                <div className="md:w-1/2"></div>
                <div className="md:w-1/2">
                    {/* an image should be here */}
                    <p className="text-lg text-blue-700 capitalize font-bold my-8 leading-[32px] md:w-2/3">Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Amani boutique in Los Angeles</p>
                    <button className="px-6 py-2 bg-white text-black rounded-sm font-semibold">See Collections</button>
                </div>
            </div>
        </div>
    )
}

export default Collections
