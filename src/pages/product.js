import React, { useEffect, useState } from "react";
import Navbar from "../components/navBar";
import Footer from "../components/Footer";
import apiInstance from "../config/api/axios";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    apiInstance.get("products")
      .then((res) => {
        console.log(res.data.data); 
        setProducts(res.data.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(); 
  }, []); 

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-10 p-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
      <Footer />
    </>
  );
};

export default Product;
