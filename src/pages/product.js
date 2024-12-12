import React from "react";
import Navbar from "../components/navBar";
import Footer from "../components/Footer";

const products = [
    { id: 2, name: "Product 2", price: "$30", img: "path/to/image2.jpg", description: "This product offers versatile functionality for any task or setting, combining convenience, durability... " },
    { id: 1, name: "Product 1", price: "$20", img: "path/to/image1.jpg", description: "This product offers versatile functionality for any task or setting, combining convenience, durability... " },
    { id: 8, name: "Product 1", price: "$20", img: "path/to/image1.jpg", description: "This product offers versatile functionality for any task or setting, combining convenience, durability... " },
    { id: 98, name: "Product 2", price: "$30", img: "path/to/image2.jpg", description: "This product offers versatile functionality for any task or setting, combining convenience, durability... " },
    { id: 89, name: "Product 3", price: "$40", img: "path/to/image3.jpg", description: "This product offers versatile functionality for any task or setting, combining convenience, durability... " },
    { id: 3, name: "Product 3", price: "$40", img: "path/to/image3.jpg", description: "This product offers versatile functionality for any task or setting, combining convenience, durability... " },
];

const Product = () => {
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 py-10 p-28">

                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 ">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <h1 className="text-xl mt-3">{product.name}</h1>
                            <div className="p-4">
                                <p className="text-gray-600 text-left">{product.description}</p>
                                <p className="text-red-600 text-left">{product.price}</p>
                                <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Product;
