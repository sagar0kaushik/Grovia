import {

  createContext,

  useState,

  useEffect

} from "react";

import API from "../api";


export const StoreContext =
createContext();


const StoreProvider = ({

  children

}) => {


  const [cart,setCart] =
  useState([]);

  const [wishlist,setWishlist] =
  useState([]);


  const token =
  localStorage.getItem("token");


  // FETCH CART

  const fetchCart =
  async()=>{

    try{

      if(!token) return;

      const response =
      await API.get(

        "/cart",

        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      setCart(

        response.data.products || []

      );

    }

    catch(error){

      console.log(error);

    }

  };


  // FETCH WISHLIST

  const fetchWishlist =
  async()=>{

    try{

      if(!token) return;

      const response =
      await API.get(

        "/wishlist",

        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      setWishlist(

        response.data.products || []

      );

    }

    catch(error){

      console.log(error);

    }

  };


  // INITIAL FETCH

  useEffect(()=>{

    fetchCart();

    fetchWishlist();

  },[token]);


  // SAVE CART

  const saveCart =
  async(updatedCart)=>{

    try{

      await API.post(

        "/cart",

        {

          products:updatedCart

        },

        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }

      );

    }

    catch(error){

      console.log(error);

    }

  };


  // SAVE WISHLIST

  const saveWishlist =
  async(updatedWishlist)=>{

    try{

      await API.post(

        "/wishlist",

        {

          products:updatedWishlist

        },

        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }

      );

    }

    catch(error){

      console.log(error);

    }

  };


  // ADD TO CART

  const addToCart = (product) => {

    const existing =
    cart.find(

      (item)=>

      item._id === product._id

    );


    let updatedCart;


    if(existing){

      updatedCart =

      cart.map((item)=>

        item._id === product._id

        ? {

            ...item,

            quantity:
            item.quantity + 1

          }

        : item

      );

    }

    else{

      updatedCart = [

        ...cart,

        {

          ...product,

          quantity:1

        }

      ];

    }


    setCart(updatedCart);

    saveCart(updatedCart);

  };


  // REMOVE FROM CART

  const removeFromCart =
  (id)=>{

    const updatedCart =

    cart.filter(

      (item)=>

      item._id !== id

    );

    setCart(updatedCart);

    saveCart(updatedCart);

  };


  // INCREASE QTY

  const increaseQty =
  (id)=>{

    const updatedCart =

    cart.map((item)=>

      item._id === id

      ? {

          ...item,

          quantity:
          item.quantity + 1

        }

      : item

    );

    setCart(updatedCart);

    saveCart(updatedCart);

  };


  // DECREASE QTY

  const decreaseQty =
  (id)=>{

    const updatedCart =

    cart.map((item)=>

      item._id === id

      ? {

          ...item,

          quantity:

          item.quantity > 1

          ? item.quantity - 1

          : 1

        }

      : item

    );

    setCart(updatedCart);

    saveCart(updatedCart);

  };


  // CLEAR CART

  const clearCart = ()=>{

    setCart([]);

    saveCart([]);

  };


  // ADD WISHLIST

  const addToWishlist =
  (product)=>{

    const existing =

    wishlist.find(

      (item)=>

      item._id === product._id

    );


    if(existing){

      return alert(

        "Already In Wishlist"

      );

    }


    const updatedWishlist = [

      ...wishlist,

      product

    ];


    setWishlist(updatedWishlist);

    saveWishlist(updatedWishlist);

  };


  // REMOVE WISHLIST

  const removeWishlist =
  (id)=>{

    const updatedWishlist =

    wishlist.filter(

      (item)=>

      item._id !== id

    );

    setWishlist(updatedWishlist);

    saveWishlist(updatedWishlist);

  };


  // TOTAL PRICE

  const totalPrice =

  cart.reduce(

    (total,item)=>

      total +

      item.price *

      item.quantity,

    0

  );


  return (

    <StoreContext.Provider

      value={{

        cart,

        wishlist,

        addToCart,

        removeFromCart,

        increaseQty,

        decreaseQty,

        clearCart,

        totalPrice,

        addToWishlist,

        removeWishlist,

      }}

    >

      {children}

    </StoreContext.Provider>

  );

};


export default StoreProvider;