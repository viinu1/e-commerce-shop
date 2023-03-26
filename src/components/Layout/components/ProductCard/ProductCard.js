import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCard } from '~/Redux/KageyamaSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({ data }) {
    const navigate = useNavigate();
    // const _id = data.title;
    // const _idString = (_id) => {
    //     return String(_id).toLowerCase().split(' ').join('');
    // };
    /* A function that is being called. */
    // const rootId = _idString(_id);
    const handleDetails = (id) => {
        navigate(`/products/${id}`, {
            state: {
                item: data,
            },
        });
    };

    const dispatch = useDispatch();

    return (
        <div className="group relative">
            <div onClick={() => handleDetails(data._id)} className="w-full h-96 cursor-pointer overflow-hidden">
                <img
                    className="w-full h-full object-cover group-hover:scale-110 duration-500"
                    src={data.image}
                    alt={data.title}
                />
            </div>
            <div className="w-full px-2 py-4 border-[1px] border-gray-600">
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-base font-bold font-titleFont">{data.title.substring(0, 15)}...</h2>
                    </div>
                    <div className="flex gap-2 relative overflow-hidden">
                        <div className="text-sm relative w-28 flex justify-end gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                            <p className=" line-through text-gray-500">${data.oldPrice}</p>
                            <p className="font-semibold">${data.price}</p>
                        </div>
                        <p
                            onClick={() =>
                                dispatch(
                                    addToCard({
                                        _id: data._id,
                                        title: data.title,
                                        image: data.image,
                                        price: data.price,
                                        quantity: 1,
                                        description: data.description,
                                    }),
                                ) & toast.success(`${data.title} is added`)
                            }
                            className="text-base absolute z-20 w-[120px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
                        >
                            Add to card
                            <FaArrowRight />
                        </p>
                    </div>
                </div>
                <div className="text-base ">
                    <p>{data.category}</p>
                </div>
                <div>
                    {data.isNew && (
                        <div className="absolute -right-4 top-4 bg-black px-4 py-1 text-white text-xl cursor-pointer">
                            Sale
                        </div>
                    )}
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
