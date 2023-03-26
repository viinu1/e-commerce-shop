import { FaCartPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { avatar, logo } from '~/assets';

function Header() {
    const productData = useSelector((state) => state.kageyama.productData);
    return (
        <div className="w-full h-16 bg-white border-b-[1px] border-b-gray-800">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between gap-5">
                <Link to="/">
                    <div>
                        <img className="w-[140px]" src={logo} alt="logo" />
                    </div>
                </Link>
                <ul className="flex gap-3 ml-auto">
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
                <Link to="/card">
                    <div className="relative cursor-pointer">
                        <FaCartPlus />
                        <span className="text-sm bg-rose-600 rounded-full text-black px-[2px] font-bol absolute top-[-10px] right-[-10px] font-bold">
                            {productData.length}
                        </span>
                    </div>
                </Link>
                <img className="w-8 h-8 rounded-full" src={avatar} alt="Avatar" />
            </div>
        </div>
    );
}

export default Header;
