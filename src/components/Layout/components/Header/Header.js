import { FaCartPlus } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { avatar, logo } from '~/assets';
import { useState } from 'react';

function Header({ isMobile }) {
    const productData = useSelector((state) => state.kageyama.productData);
    const userInfo = useSelector((state) => state.kageyama.userInfo);

    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    return (
        <div className="w-full h-16 bg-white border-b-[1px] border-b-gray-800">
            <div className="max-w-screen-xl h-full mx-auto flex items-center gap-5">
                <Link to="/">
                    <div>
                        <img className="w-[140px]" src={logo} alt="logo" />
                    </div>
                </Link>

                <ul className="ml-auto text-base font-semibold">
                    {openMenu && isMobile ? (
                        <MdOutlineClose size={'24px'} className="cursor-pointer" onClick={handleMenu} />
                    ) : !openMenu && isMobile ? (
                        <HiOutlineMenu size={'24px'} className="cursor-pointer" onClick={handleMenu} />
                    ) : (
                        <ul className="flex gap-3 ml-auto z-20 text-center p-8">
                            <li>
                                <a className="header-nav" href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/following">
                                    Page
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/">
                                    element
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    )}

                    {openMenu && (
                        <ul className="flex flex-col absolute bg-white text-black right-0 top-12 gap-3 ml-auto z-20 text-center p-8">
                            <li>
                                <a className="header-nav" href="/">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/following">
                                    Page
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/">
                                    element
                                </a>
                            </li>
                            <li>
                                <a className="header-nav" href="/">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    )}
                </ul>

                <Link to="/card" className="">
                    <div className="relative cursor-pointer ml-auto">
                        <FaCartPlus />
                        <span className="text-sm bg-rose-600 rounded-full text-black px-[2px] font-bol absolute top-[-10px] right-[-10px] font-bold">
                            {productData.length}
                        </span>
                    </div>
                </Link>
                <Link to="/login">
                    <img
                        className="w-8 h-8 rounded-full"
                        src={userInfo ? userInfo.image : avatar}
                        alt={userInfo ? userInfo.name : 'Default'}
                    />
                </Link>
            </div>
        </div>
    );
}

export default Header;
