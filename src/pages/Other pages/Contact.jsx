import { FaHome } from "react-icons/fa"
import { FaSquarePhone } from "react-icons/fa6"


function Contact() {
    return (
        <div className="mt-28 max-w-screen-2xl mx-auto container xl:px-28 px-4">
            <div className="py-6 max-w-7xl">
                <h1 className="title">Welcome to the shoes section</h1>
                
                <div className="flex flex-col md:flex-row gap-6">

                    <div className="md:w-1/2">
                        <h2 className="text-gray-800 font-semibold text-3xl mb-4">We are here to help!</h2>
                        <p className="text-base text-gray-800 max-w-md">Have a question? We are here to help! Our friendly and knowledgeable customer experience team is available round the clock to make sure you shop with ease. Feel free to reach us via phone, email or the form provided.</p>

                        <div className="mt-10 text-gray-800 flex flex-col gap-3">
                            <p className="flex gap-2 items-center"><FaHome />
                                <span>P.O Box 8237 Van Nuys, CA 64646</span>
                            </p>
                            <p className="flex gap-2 items-center"><FaSquarePhone />
                                <span>1 (833) 234 - 6746</span>
                            </p>
                        </div>
                        
                        <div className="mt-10 flex flex-col gap-1 text-gray-800">
                            <div className="flex gap-2">
                                <h5 className="font-bold">General Inquires:</h5>
                                <p>contact@nicksalifu.com</p>
                            </div>
                            <div className="flex gap-2">
                                <h5 className="font-bold">Marketing:</h5>
                                <p>marketing@fridaynicksalifu.com</p>
                            </div>
                            <div className="flex gap-2">
                                <h5 className="font-bold">Wholesale:</h5>
                                <p>wholesale@nicksalifufriday.com</p>
                            </div>
                            <div className="flex gap-2">
                                <h5 className="font-bold">Customer Experience:</h5>
                                <p>customerexperience@salifu.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 w-20">
                        <form className="flex flex-col gap-4">
                            <input type="text" className="px-4 py-2 border border-gray-500" placeholder="Name"/>
                            <input type="email" className="w-full px-4 py-2 border border-gray-500" placeholder="Email"/>
                            <input type="text" className="w-full px-4 py-2 border border-gray-500" placeholder="Phone Number" />
                            <textarea name="comment" id="comment" placeholder="Comment" className="w-full border border-gray-500 h-48 px-4 py-2"></textarea>
                            <button type="submit" className="px-4 py-2 bg-blue-500 font-semibold text-white w-1/2">Send Message</button>
                        </form>

                        <div className="mt-8">
                            <p>This site is protected bt CAPTCHA and the Google <span className="text-blue-500 font-semibold">Privacy Policy</span> and <span className="text-blue-500 font-semibold">Terms of Service</span> apply</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
