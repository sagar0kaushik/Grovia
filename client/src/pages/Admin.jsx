import { useEffect,useState } from "react";

import API from "../api";

import Navbar from "../components/Navbar";


const Admin = () => {

  const token =
  localStorage.getItem("token");

  const [products,setProducts] =
  useState([]);

  const [formData,setFormData] =
  useState({

    name:"",
    price:"",
    description:"",
    image:"",
    category:""

  });


  // FETCH PRODUCTS

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


  useEffect(()=>{

    fetchProducts();

  },[]);


  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
      e.target.value

    });

  };


  // ADD PRODUCT

  const addProduct =
  async()=>{

    try{

      await API.post(

        "/products",

        formData,

        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      alert("Product Added");

      setFormData({

    name:"",

    price:"",

    description:"",

    image:"",

    category:""

  });

      fetchProducts();

    }

    catch(error){

  alert(

    error.response?.data?.message ||

    error.message ||

    "Something Went Wrong"

  );

}

  };


  // DELETE PRODUCT

  const deleteProduct =
  async(id)=>{

    try{

      await API.delete(

        `/products/${id}`,

        {

          headers:{

            Authorization:
            `Bearer ${token}`

          }

        }

      );

      fetchProducts();

    }

    catch(error){

      console.log(error);

    }

  };


  return (

    <>
      <Navbar />

      <div className="p-10">

        <h1 className="
        text-5xl
        font-bold
        mb-10
        ">

          Admin Dashboard

        </h1>


        {/* FORM */}

        <div className="
        grid
        md:grid-cols-2
        gap-5
        mb-10
        ">

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
             value={formData.name}
            className="p-4 rounded-xl"
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
              value={formData.price}
            className="p-4 rounded-xl"
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            onChange={handleChange}
             value={formData.image}
            className="p-4 rounded-xl"
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            onChange={handleChange}
             value={formData.category}
            className="p-4 rounded-xl"
          />

        </div>

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
           value={formData.description}
          className="
          p-4
          rounded-xl
          w-full
          mb-5
          "
        />

        <button

          onClick={addProduct}

          className="
          bg-[#6B7A52]
          text-white
          px-8
          py-4
          rounded-2xl
          "

        >

          Add Product

        </button>


        {/* PRODUCTS */}

        <div className="
        mt-16
        grid
        lg:grid-cols-4
        md:grid-cols-2
        gap-8
        ">

          {

            products.map((product)=>(

              <div

                key={product._id}

                className="
                bg-white
                p-5
                rounded-3xl
                "

              >

                <img

                  src={product.image}

                  alt=""

                  className="
                  w-full
                  h-52
                  object-cover
                  rounded-2xl
                  "

                />

                <h1 className="
                text-2xl
                font-bold
                mt-4
                ">

                  {product.name}

                </h1>

                <p className="mt-2">

                  ₹{product.price}

                </p>

                <button

                  onClick={() =>
                    deleteProduct(product._id)
                  }

                  className="
                  bg-red-500
                  text-white
                  px-5
                  py-3
                  rounded-xl
                  mt-5
                  "

                >

                  Delete

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </>

  );

};

export default Admin;