import { useEffect, useState } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCard } from '~/Redux/KageyamaSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductDetails() {
    const dispatch = useDispatch();

    const [details, setDetails] = useState({});
    const [quantityCount, setQuantityCount] = useState(1);
    const location = useLocation();
    useEffect(() => {
        setDetails(location.state.item);
    }, [location]);

    const handleInrea = () => {
        setQuantityCount(quantityCount + 1);
    };
    const handleDeInrea = () => {
        setQuantityCount(quantityCount === 0 ? 0 : (quantityCount) => quantityCount - 1);
    };
    return (
        <div>
            <div className="max-w-screen-xl mx-auto py-10 flex gap-10">
                <div className="w-2/5  relative">
                    <img className="w-full h-[500px] object-cover" src={details.image} alt={details.title} />
                    {details.isNew && (
                        <div className="absolute -right-4 top-4 bg-black px-4 py-1 text-white text-xl cursor-pointer">
                            Sale
                        </div>
                    )}
                </div>

                <div className="w-3/5 mt-12">
                    <div>
                        <h2 className="font-semibold text-4xl">{details.title}</h2>
                        <div className="flex gap-4 items-center mt-3 mb-6">
                            <p className="text-xl line-through text-gray-500">${details.oldPrice}</p>
                            <p className="text-2xl font-semibold">${details.price}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-base">
                        <div className="flex gap-2">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                        </div>
                        <p className="text-gray-700 text-xs">(1 customer reviews)</p>
                    </div>
                    <p className="text-base text-gray-500 mt-3">{details.description}</p>
                    <div className="flex items-center gap-4 mt-12 text-sm">
                        <div className="w-52 flex items-center justify-between gap-2 border border-gray-400 p-2">
                            <p>Quantity</p>
                            <div className="flex items-center text-sm font-semibold">
                                <button
                                    onClick={handleDeInrea}
                                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                >
                                    -
                                </button>
                                <p className="mx-2">{quantityCount}</p>
                                <button
                                    onClick={handleInrea}
                                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div
                            onClick={() =>
                                dispatch(
                                    addToCard({
                                        _id: details._id,
                                        title: details.title,
                                        image: details.image,
                                        price: details.price,
                                        quantity: quantityCount,
                                        description: details.description,
                                    }),
                                ) & toast.success(`${details.title} is added`)
                            }
                            className="cursor-pointer border-[1px] border-gray-400 p-2 bg-black text-white"
                        >
                            Add to card
                        </div>
                    </div>
                    <div className="text-base text-gray-500 mt-16">Category: {details.category}</div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                className="text-base"
            />
        </div>
    );
}
