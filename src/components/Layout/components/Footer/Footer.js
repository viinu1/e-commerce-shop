import { logo } from '~/assets';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaNapster, FaTwitter, FaWhmcs, FaYoutube } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
export default function Footer({ isMobile }) {
    return (
        <div className="bg-black text-[#949494] py-12 font-titleFont">
            <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4">
                <div className="flex flex-col gap-4">
                    <img className="w-32 bg-white" src={logo} alt="Logo" />
                    <p className="text-white text-sm tracking-wide">vanvi.com</p>
                    <div className=" flex gap-4 text-xl text-gray-400">
                        <FaGithub className="hover:text-white duration-300 cursor-pointer" />
                        <FaFacebook className="hover:text-white duration-300 cursor-pointer" />
                        <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
                        <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
                        <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-white">Locate us</h2>
                    <div className=" text-base flex flex-col gap-2">
                        <p>Ward 1, District 8, HCM city</p>
                        <p>Phone: 0901614258</p>
                        <p>Mobile Phone:0796880058</p>
                        <p>e-mail: pvanvi2508@gmail.com</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-white">Profile</h2>
                    <div className="text-base flex flex-col gap-2">
                        <p className="flex gap-3 items-center hover:text-white cursor-pointer duration-300">
                            <span>
                                <FaNapster />
                            </span>
                            My account
                        </p>
                        <p className="flex gap-3 items-center hover:text-white cursor-pointer duration-300">
                            <span>
                                <FaWhmcs />
                            </span>
                            Check out
                        </p>
                        <p className="flex gap-3 items-center hover:text-white cursor-pointer duration-300">
                            <span>
                                <FaHome />
                            </span>
                            order tracking
                        </p>

                        <p className="flex gap-3 items-center hover:text-white cursor-pointer duration-300">
                            <span>
                                <MdLocationOn />
                            </span>
                            help and support
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center">
                    <input
                        type="text"
                        className="bg-transparent border border-gray-700 px-4 py-2 text-sm w-full"
                        placeholder="Enter your email"
                    />
                    <button className="text-sm border border-t-0 border-gray-700 hover:bg-gray-900 active:bg-white active:text-black">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
