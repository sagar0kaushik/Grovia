import { useEffect, useState } from "react";

import ProductCard from "./ProductCard";

import API from "../api";


const Products = ({ search }) => {

  const [products,setProducts] =
  useState([]);


  // FETCH PRODUCTS

  useEffect(()=>{

    const fetchProducts =
    async()=>{

      try{

        const response =
        await API.get("/products");

        setProducts(response.data);

      }

      catch(error){

        console.log(error);

      }

    };

    fetchProducts();

  },[]);


  // SEARCH FILTER

  const filteredProducts =
  products.filter((product)=>

    product.name
    .toLowerCase()
    .includes(search.toLowerCase())

  );


  return (

    <section className="px-10 py-20">

      <h1 className="text-4xl font-bold mb-10 text-[#4A3428]">

        Grocery Products

      </h1>


      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">

        {filteredProducts.map((product)=>(

          <ProductCard

            key={product._id}

            product={product}

          />

        ))}

      </div>

    </section>

  );

};

export default Products;