
function Collections() {
    return (
        <div className="bg-[url('../../../images/banner.jpg')] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20">
            <div className="h-[560px] flex justify-between md:flex-row items-center">    
                <div className="md:w-1/2">
                    <div>
                        <img src="/images/logo_two.jpg" alt="logo" className="w-20"/>
                    </div>
                    <p className="text-lg text-white my-8 md:w-2/3">Our brand is not just about clothing, it's about celebrating individuality through timeless elegance and unmatched craftsmanship. Every piece in our collection is meticulously crafted with the finest materials</p>
                    <button className="px-6 py-2 bg-Black hover:bg-black text-white rounded-sm font-semibold">See Collections</button>
                </div>
                <div className="md:w-1/2"></div>
            </div>
        </div>
    )
}

export default Collections
