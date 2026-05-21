// Cart.jsx

import { useContext, useState } from "react";

import { StoreContext } from "../context/StoreContext";

import Navbar from "../components/Navbar";

import API from "../api";

const Cart = () => {

  const {

    cart,

    removeFromCart,

    increaseQty,

    decreaseQty,

    totalPrice,

    clearCart,

  } = useContext(StoreContext);

  const [popup, setPopup] =
  useState(false);

  const token =
  localStorage.getItem("token");

  // PLACE ORDER

  const handlePlaceOrder = () => {

    // LOGIN CHECK

    if(!token){

      alert("Login First");

      return;

    }

    // EMPTY CART CHECK

    if(cart.length === 0){

      alert("Cart is Empty");

      return;

    }

    setPopup(true);

  };

  // ORDER SUCCESS

  const handleOrder = async() => {

  try{

    const response =
    await API.post(

      "/orders",

      {

        products:cart,

        total:totalPrice

      },

      {

        headers:{

          Authorization:
          `Bearer ${token}`

        }

      }

    );

    alert(response.data.message);

    clearCart();

    setPopup(false);

  }

  catch(error){

    console.log(error);

    alert("Order Failed");

  }

};

  return (

    <>

      <Navbar />

      <div className="
      min-h-screen
      p-5
      md:p-10
      bg-[#F6F1E7]
      ">

        {/* TITLE */}

        <h1 className="
        text-4xl
        md:text-5xl
        font-bold
        mb-10
        text-[#4A3428]
        ">

          Your Cart

        </h1>

        {/* EMPTY CART */}

        {

          cart.length === 0 && (

            <div className="
            flex
            items-center
            justify-center
            h-[50vh]
            ">

              <h1 className="
              text-3xl
              text-gray-500
              font-semibold
              ">

                Cart is Empty

              </h1>

            </div>

          )

        }

        {/* CART ITEMS */}

        <div className="
        flex
        flex-col
        gap-6
        ">

          {

            cart.map((item) => (

              <div

                key={item._id}

                className="
                bg-white/40
                backdrop-blur-lg
                border
                border-white/30
                rounded-3xl
                p-5
                shadow-lg
                flex
                flex-col
                md:flex-row
                justify-between
                md:items-center
                gap-5
                hover:shadow-2xl
                transition-all
                duration-300
                "

              >

                {/* LEFT */}

                <div>

                  <h2 className="
                  text-2xl
                  font-bold
                  text-[#4A3428]
                  ">

                    {item.name}

                  </h2>

                  <p className="
                  mt-2
                  text-gray-600
                  text-lg
                  ">

                    ₹{item.price}

                  </p>

                  {/* QUANTITY */}

                  <div className="
                  flex
                  items-center
                  gap-4
                  mt-5
                  ">

                    {/* MINUS */}

                    <button

                      onClick={() =>
                        decreaseQty(item._id)
                      }

                      className="
                      bg-gray-200
                      w-10
                      h-10
                      rounded-full
                      text-xl
                      font-bold
                      transition-all
                      duration-150
                      active:scale-90
                      hover:scale-110
                      "

                    >

                      -

                    </button>

                    {/* QTY */}

                    <span className="
                    text-xl
                    font-bold
                    ">

                      {item.quantity}

                    </span>

                    {/* PLUS */}

                    <button

                      onClick={() =>
                        increaseQty(item._id)
                      }

                      className="
                      bg-[#6B7A52]
                      text-white
                      w-10
                      h-10
                      rounded-full
                      text-xl
                      font-bold
                      transition-all
                      duration-150
                      active:scale-90
                      hover:scale-110
                      "

                    >

                      +

                    </button>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="
                flex
                flex-col
                items-start
                md:items-end
                ">

                  <p className="
                  font-bold
                  text-2xl
                  text-[#4A3428]
                  ">

                    ₹{item.price * item.quantity}

                  </p>

                  {/* REMOVE */}

                  <button

                    onClick={() =>
                      removeFromCart(item._id)
                    }

                    className="
                    bg-red-500
                    text-white
                    px-5
                    py-2
                    rounded-2xl
                    mt-4
                    shadow-lg
                    transition-all
                    duration-150
                    hover:scale-105
                    active:scale-95
                    hover:shadow-2xl
                    "

                  >

                    Remove

                  </button>

                </div>

              </div>

            ))

          }

        </div>

        {/* TOTAL */}

        {

          cart.length > 0 && (

            <div className="
            mt-14
            flex
            flex-col
            md:flex-row
            justify-between
            items-start
            md:items-center
            gap-5
            ">

              <h1 className="
              text-3xl
              md:text-4xl
              font-bold
              text-[#4A3428]
              ">

                Total: ₹{totalPrice}

              </h1>

              {/* PLACE ORDER */}

              <button

                onClick={handlePlaceOrder}

                className="
                bg-[#6B7A52]
                text-white
                px-8
                py-4
                rounded-2xl
                text-lg
                shadow-lg
                transition-all
                duration-150
                hover:scale-105
                active:scale-95
                hover:shadow-2xl
                "

              >

                Place Order

              </button>

            </div>

          )

        }

        {/* PAYMENT POPUP */}

        {

          popup && (

            <div className="
            fixed
            inset-0
            bg-black/50
            flex
            items-center
            justify-center
            z-50
            ">

              <div className="
              bg-white
              p-10
              rounded-3xl
              shadow-2xl
              w-[90%]
              max-w-md
              text-center
              ">

                <h1 className="
                text-4xl
                font-bold
                text-[#4A3428]
                ">

                  Payment Method

                </h1>

                <p className="
                mt-4
                text-gray-600
                ">

                  Only Cash On Delivery Available

                </p>

                {/* COD BUTTON */}

                <button

                  onClick={handleOrder}

                  className="
                  bg-[#6B7A52]
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  mt-8
                  w-full
                  text-lg
                  shadow-lg
                  transition-all
                  duration-150
                  hover:scale-105
                  active:scale-95
                  "

                >

                  Cash On Delivery

                </button>

                {/* CLOSE */}

                <button

                  onClick={() =>
                    setPopup(false)
                  }

                  className="
                  mt-5
                  text-gray-500
                  hover:text-black
                  "

                >

                  Cancel

                </button>

              </div>

            </div>

          )

        }

      </div>

    </>

  );

};

export default Cart;