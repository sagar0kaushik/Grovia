import { useState } from "react";

import API from "../api";

import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  const [isSignup, setIsSignup] =
  useState(false);

  const [formData, setFormData] =
  useState({

    name:"",
    email:"",
    password:""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });

  };

  const handleSubmit = async() => {

    try{

      const endpoint =
      isSignup
      ? "/users/signup"
      : "/users/login";

      const response =
      await API.post(

        endpoint,

        formData

      );

      // LOGIN TOKEN

      if(response.data.token){

        localStorage.setItem(

          "token",

          response.data.token

        );

      }

      alert(response.data.message);

      navigate("/");

    }

    catch(error){

      alert(error.message);

    }

  };

  return (

    <div className="
    h-screen
    flex
    items-center
    justify-center
    ">

      <div className="
      bg-white/20
      backdrop-blur-lg
      p-10
      rounded-3xl
      w-[400px]
      ">

        <h1 className="
        text-4xl
        font-bold
        mb-8
        ">

          {
            isSignup
            ? "Signup"
            : "Login"
          }

        </h1>

        {

          isSignup && (

            <input

              type="text"

              name="name"

              placeholder="Name"

              onChange={handleChange}

              className="
              w-full
              p-3
              rounded-xl
              mb-4
              "

            />

          )

        }

        <input

          type="email"

          name="email"

          placeholder="Email"

          onChange={handleChange}

          className="
          w-full
          p-3
          rounded-xl
          mb-4
          "

        />

        <input

          type="password"

          name="password"

          placeholder="Password"

          onChange={handleChange}

          className="
          w-full
          p-3
          rounded-xl
          mb-4
          "

        />

        <button

          onClick={handleSubmit}

          className="
          w-full
          bg-[#6B7A52]
          text-white
          py-3
          rounded-xl
          transition-all
          duration-150
          active:scale-95
          hover:scale-105
          "

        >

          {
            isSignup
            ? "Signup"
            : "Login"
          }

        </button>

        <p
          className="
          mt-5
          text-center
          cursor-pointer
          "
          onClick={() =>
            setIsSignup(!isSignup)
          }
        >

          {

            isSignup

            ? "Already have account? Login"

            : "Don't have account? Signup"

          }

        </p>

      </div>

    </div>

  );

};

export default Login;