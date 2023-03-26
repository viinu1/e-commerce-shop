import React, { useEffect, useState } from 'react';
import { fetchFromAPI } from '~/api/API';
import ProductCard from '../ProductCard';

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        try {
            fetchFromAPI(`products`).then((data) => setProducts(data));
        } catch (error) {
            console.log('call api thất bại');
        }
    }, []);
    return (
        <div className="py-10">
            <div className="flex flex-col items-center gap-7">
                <h1 className="bg-black text-white font-bold text-xl px-12 py-2">Shopping everyday</h1>
                <span className="bg-black h-[3px] w-52"></span>
                <p className="max-w-[700px] text-center text-gray-700 text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} data={product} />
                ))}
            </div>
        </div>
    );
}
