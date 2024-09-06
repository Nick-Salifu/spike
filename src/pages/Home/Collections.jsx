
function Collections() {
    return (
        <div className="bg-[url('../../../public/images/banner.jpg')] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20">
            <div className="h-[560px] flex justify-between md:flex-row items-center">    
                <div className="md:w-1/2">
                    {/* an image should be here */}
                    <p className="text-lg text-white capitalize font-bold my-8 leading-[32px] md:w-2/3">Lustrous yet understated. The new evening wear collection exclusively offered at the reopened Giorgio Amani boutique in Los Angeles</p>
                    <button className="px-6 py-2 bg-Black hover:bg-black text-white rounded-sm font-semibold">See Collections</button>
                </div>
                <div className="md:w-1/2"></div>
            </div>
        </div>
    )
}

export default Collections
