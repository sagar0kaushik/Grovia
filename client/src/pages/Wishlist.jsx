import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Navbar from "../components/Navbar";

const Wishlist = () => {

  const {
    wishlist,
    removeWishlist,
    addToCart,
  } = useContext(StoreContext);

  return (
    <>
      <Navbar />

      <div className="p-10">

        <h1 className="text-4xl font-bold mb-10">
          Wishlist
        </h1>

        {wishlist.map((item) => (

          <div
            key={item.id}
            className="bg-white p-5 rounded-xl mb-5 flex justify-between"
          >

            <div>
              <h2 className="text-2xl">
                {item.name}
              </h2>

              <p>
                ₹{item.price}
              </p>
            </div>

            <div className="flex gap-3">

              <button
                onClick={() => {
                    addToCart(item);
                     removeWishlist(item.id);
                }}
                className="bg-[#6B7A52] text-white px-4 py-2 rounded-xl"
              >
                Add To Cart
              </button>

              <button
                onClick={() =>
                  removeWishlist(item.id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded-xl"
              >
                Remove
              </button>

            </div>

          </div>

        ))}

      </div>
    </>
  );
};

export default Wishlist;