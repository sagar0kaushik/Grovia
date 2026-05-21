import { motion } from "framer-motion";

import { useContext } from "react";

import { StoreContext } from "../context/StoreContext";


const ProductCard = ({ product }) => {

  const {

    addToCart,

    addToWishlist

  } = useContext(StoreContext);


  return (

    <motion.div

      whileHover={{ scale:1.03 }}

      className="
      bg-white/20
      backdrop-blur-lg
      rounded-3xl
      p-4
      border
      border-white/20
      shadow-lg
      "

    >

      {/* IMAGE */}

      <img

        src={
          product.image ||

          "https://placehold.co/300x300"
        }

        alt=""

        className="
        w-full
        h-52
        object-cover
        rounded-2xl
        "

      />

      {/* NAME */}

      <h2 className="
      mt-4
      text-xl
      font-semibold
      ">

        {product.name}

      </h2>

      {/* PRICE */}

      <p className="text-gray-600">

        ₹{product.price}

      </p>

      {/* BUTTONS */}

      <div className="
      flex
      gap-3
      mt-4
      ">

        {/* CART */}

        <button

          onClick={() =>
            addToCart(product)
          }

          className="
          bg-[#6B7A52]
          text-white
          px-4
          py-2
          rounded-xl
          transition-all
          duration-150
          hover:scale-105
          active:scale-95
          "

        >

          Add Cart

        </button>

        {/* WISHLIST */}

        <button

          onClick={() =>
            addToWishlist(product)
          }

          className="
          bg-[#4A3428]
          text-white
          px-4
          py-2
          rounded-xl
          transition-all
          duration-150
          hover:scale-105
          active:scale-95
          "

        >

          Wishlist

        </button>

      </div>

    </motion.div>

  );

};

export default ProductCard;