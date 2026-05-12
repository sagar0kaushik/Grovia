import {
  ShoppingCart,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
  Package
} from "lucide-react";

import {
  Link
} from "react-router-dom";

import {
  useState
} from "react";

const Navbar = ({
  search = "",
  setSearch = () => {}
}) => {

  const token =
  localStorage.getItem("token");

  const [menuOpen, setMenuOpen] =
  useState(false);

  const [profileOpen, setProfileOpen] =
  useState(false);

  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.reload();

  };

  return (

    <nav className="
    sticky
    top-0
    z-50
    backdrop-blur-xl
    bg-white/20
    border-b
    border-white/20
    px-6
    py-4
    shadow-lg
    ">

      <div className="
      flex
      justify-between
      items-center
      ">

        {/* LOGO */}

        <Link to="/">

          <h1 className="
          text-4xl
          font-bold
          tracking-wide
          text-[#4A3428]
          hover:scale-105
          transition-all
          duration-200
          ">

            Grovia

          </h1>

        </Link>

        {/* DESKTOP MENU */}

        <div className="
        hidden
        md:flex
        items-center
        gap-5
        ">

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search groceries..."
            value={search}
            onChange={(e)=>
              setSearch(e.target.value)
            }
            className="
            px-5
            py-2
            rounded-2xl
            bg-white/40
            outline-none
            border
            border-white/30
            w-65
            focus:w-75
            transition-all
            duration-300
            "
          />

          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="
            hover:scale-110
            active:scale-95
            transition-all
            duration-150
            "
          >

            <Heart
              className="text-[#4A3428]"
            />

          </Link>

          {/* CART */}

          <Link
            to="/cart"
            className="
            hover:scale-110
            active:scale-95
            transition-all
            duration-150
            "
          >

            <ShoppingCart
              className="text-[#4A3428]"
            />

          </Link>

          {/* PROFILE / LOGIN */}

          {

            token ? (

              <div className="relative">

                {/* PROFILE BUTTON */}

                <button

                  onClick={() =>
                    setProfileOpen(!profileOpen)
                  }

                  className="
                  flex
                  items-center
                  gap-3
                  hover:scale-105
                  transition-all
                  duration-150
                  "

                >

                  {/* USER ICON */}

                  <div className="
                  w-11
                  h-11
                  rounded-full
                  bg-[#6B7A52]
                  text-white
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  ">

                    <User size={20} />

                  </div>

                  <ChevronDown
                    size={18}
                    className={`
                    transition-all
                    duration-200
                    ${profileOpen ? "rotate-180" : ""}
                    `}
                  />

                </button>

                {/* DROPDOWN */}

                {

                  profileOpen && (

                    <div className="
                    absolute
                    right-0
                    top-16
                    w-80
                    bg-white/90
                    backdrop-blur-2xl
                    border
                    border-white/30
                    rounded-3xl
                    shadow-2xl
                    p-6
                    z-50
                    ">

                      {/* USER INFO */}

                      <div className="
                      flex
                      items-center
                      gap-4
                      mb-6
                      ">

                        <div className="
                        w-14
                        h-14
                        rounded-full
                        bg-[#6B7A52]
                        text-white
                        flex
                        items-center
                        justify-center
                        shadow-lg
                        text-xl
                        ">

                          <User size={24} />

                        </div>

                        <div>

                          <h1 className="
                          text-2xl
                          font-bold
                          text-[#4A3428]
                          ">

                            Grovia User

                          </h1>

                          <p className="
                          text-gray-500
                          text-sm
                          ">

                            Premium Grocery Member

                          </p>

                        </div>

                      </div>

                      {/* ORDER CARD */}

                      <div className="
                      bg-[#F6F1E7]
                      rounded-2xl
                      p-5
                      flex
                      items-center
                      justify-between
                      mb-4
                      ">

                        <div>

                          <p className="
                          text-gray-500
                          text-sm
                          ">

                            Total Orders

                          </p>

                          <h2 className="
                          text-4xl
                          font-bold
                          text-[#4A3428]
                          mt-1
                          ">

                            4

                          </h2>

                        </div>

                        <div className="
                        bg-[#6B7A52]
                        text-white
                        w-14
                        h-14
                        rounded-2xl
                        flex
                        items-center
                        justify-center
                        ">

                          <Package size={24} />

                        </div>

                      </div>

                      {/* MEMBERSHIP */}

                      <div className="
                      bg-gradient-to-r
                      from-[#6B7A52]
                      to-[#8A9B6E]
                      text-white
                      rounded-2xl
                      p-5
                      mb-5
                      shadow-lg
                      ">

                        <p className="
                        text-sm
                        opacity-80
                        ">

                          Membership Status

                        </p>

                        <h2 className="
                        text-2xl
                        font-bold
                        mt-2
                        ">

                          Premium Member

                        </h2>

                        <p className="
                        mt-2
                        text-sm
                        opacity-90
                        ">

                          Enjoy luxury grocery experience
                          with exclusive quality products.

                        </p>

                      </div>

                      {/* LOGOUT */}

                      <button

                        onClick={handleLogout}

                        className="
                        w-full
                        bg-red-500
                        text-white
                        py-4
                        rounded-2xl
                        shadow-lg
                        transition-all
                        duration-150
                        hover:scale-105
                        active:scale-95
                        hover:shadow-2xl
                        "

                      >

                        Logout

                      </button>

                    </div>

                  )

                }

              </div>

            ) : (

              <Link
                to="/login"
                className="
                bg-[#6B7A52]
                text-white
                px-6
                py-2
                rounded-2xl
                shadow-lg
                transition-all
                duration-150
                hover:scale-105
                active:scale-95
                hover:shadow-2xl
                "
              >

                Sign In

              </Link>

            )

          }

        </div>

        {/* MOBILE MENU BUTTON */}

        <button
          className="
          md:hidden
          "
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {

            menuOpen

            ? <X />

            : <Menu />

          }

        </button>

      </div>

      {/* MOBILE MENU */}

      {

        menuOpen && (

          <div className="
          md:hidden
          mt-5
          flex
          flex-col
          gap-5
          bg-white/80
          p-5
          rounded-3xl
          shadow-xl
          ">

            {/* SEARCH */}

            <input
              type="text"
              placeholder="Search groceries..."
              value={search}
              onChange={(e)=>
                setSearch(e.target.value)
              }
              className="
              px-4
              py-3
              rounded-xl
              bg-white
              outline-none
              "
            />

            {/* LINKS */}

            <Link
              to="/wishlist"
              className="text-lg"
            >
              Wishlist
            </Link>

            <Link
              to="/cart"
              className="text-lg"
            >
              Cart
            </Link>

            {

              token ? (

                <button

                  onClick={handleLogout}

                  className="
                  bg-red-500
                  text-white
                  py-3
                  rounded-xl
                  "

                >

                  Logout

                </button>

              ) : (

                <Link
                  to="/login"
                  className="
                  bg-[#6B7A52]
                  text-white
                  py-3
                  rounded-xl
                  text-center
                  "
                >

                  Sign In

                </Link>

              )

            }

          </div>

        )

      }

    </nav>

  );

};

export default Navbar;