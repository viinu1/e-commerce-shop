import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decrementQuantity, deleteCard, incrementQuantity, resetCard } from '~/Redux/KageyamaSlice';

export default function Card() {
    const productData = useSelector((state) => state.kageyama.productData);
    const userInfo = useSelector((state) => state.kageyama.userInfo);

    const dispatch = useDispatch();
    const [totalAmt, setTotalAmt] = useState('');
    const [payNow, setPayNow] = useState(false);

    useEffect(() => {
        let price = 0;
        productData.map((item) => {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price.toFixed(2));
    }, [productData]);

    const handleCheckOut = () => {
        if (userInfo) {
            setPayNow(true);
        } else {
            toast.error('Please Sign in to checkout');
        }
    };
    return (
        <div>
            <div>
                <img
                    className="w-full h-60 object-cover"
                    src="https://img.freepik.com/premium-photo/consumer-concept-mini-shopping-trolley-shopping-colored-background-minimalism-top-view_661495-6704.jpg"
                    alt="ảnh"
                />

                <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto py-10 gap-4">
                    <div className="md:w-2/3 py-6">
                        <div className="w-full">
                            <h2 className="md:text-2xl text-xl font-medium">shopping cart</h2>
                        </div>
                        <div>
                            {productData.map((product, index) => (
                                <div key={index} className="flex items-center justify-between md:gap-6  gap-3 mt-4">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineClose
                                            onClick={() =>
                                                dispatch(deleteCard(product._id)) &
                                                toast.success(`${product.title} is removed`)
                                            }
                                            className="text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                                        />
                                        <img
                                            className="md:w-32 md:h-32 w-12 h-12 object-cover"
                                            src={product.image}
                                            alt={product.title}
                                        />
                                    </div>
                                    <h2 className="w-36 text-xs md:text-xl">{product.title}</h2>
                                    <p className="w-10 text-xs md:text-xl">${product.price}</p>
                                    <div className="w-52 text-xs flex items-center justify-between gap-2 border border-gray-400 p-2">
                                        <p>Quantity</p>
                                        <div className="flex items-center text-sm font-semibold">
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        decrementQuantity({
                                                            _id: product._id,
                                                            title: product.title,
                                                            image: product.image,
                                                            price: product.price,
                                                            quantity: 1,
                                                            description: product.description,
                                                        }),
                                                    )
                                                }
                                                className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                            >
                                                -
                                            </button>
                                            <p className="mx-2 text-xs md:text-lg">{product.quantity}</p>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        incrementQuantity({
                                                            _id: product._id,
                                                            title: product.title,
                                                            image: product.image,
                                                            price: product.price,
                                                            quantity: 1,
                                                            description: product.description,
                                                        }),
                                                    )
                                                }
                                                className="border h-5 font-normal text-base md:text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-xs md:text-xl w-14">${product.quantity * product.price}</div>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => dispatch(resetCard()) & toast.success('Your cart empty')}
                            className="bg-red-500 text-base text-white mt-8 py-1 px-6 hover:bg-red-700 duration-300"
                        >
                            Reset Cart
                        </button>
                        <Link to="/">
                            <div className="text-base text-gray-400 mt-6 flex gap-2 items-center hover:underline">
                                <span>
                                    <FaArrowLeft />
                                </span>
                                go to shoping
                            </div>
                        </Link>
                    </div>
                    <div className="md:w-1/3 py-6 bg-[#fafafa] px-4">
                        <div className="flex flex-col gap-4 border-b-[1px] border-b-gray-700 pb-6">
                            <h2 className="text-2xl font-medium">Card Total</h2>
                            <p className="flex gap-2 text-base items-center">
                                Subtotal:
                                <span className="text-xl font-[500]">${totalAmt}</span>
                            </p>
                            <p className="flex gap-2 text-base items-start">
                                Shipping
                                <span className="">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel vestibulum turpis
                                </span>
                            </p>
                        </div>
                        <div className="font-titleFont font-semibold flex justify-between mt-6">
                            Total: <span className="text-xl font-bold">${totalAmt}</span>
                        </div>
                        <button
                            onClick={handleCheckOut}
                            className="text-base bg-black text-white w-full mt-6 hover:bg-gray-800 duration-300 py-2"
                        >
                            process to checkout
                        </button>
                    </div>
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
