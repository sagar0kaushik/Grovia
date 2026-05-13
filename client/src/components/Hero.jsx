import { motion } from "framer-motion";

const Hero = () => {

  return (

    <section className="
    relative
    h-[85vh]
    overflow-hidden
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-[#F6F1E7]
    via-[#EFE7D3]
    to-[#E4DBC4]
    ">

      {/* FLOATING ELEMENTS */}

      {/* APPLE */}

      <motion.img

        src="/apple.png"

        alt=""

        animate={{
          y:[0,-20,0]
        }}

        transition={{
          repeat:Infinity,
          duration:4
        }}

        className="
        absolute
        top-20
        left-10
        w-24
        opacity-20
        blur-[1px]
        hidden
        md:block
        "

      />

      {/* OLIVE LEAF */}

      <motion.img

        src="/leaf.png"

        alt=""

        animate={{
          y:[0,20,0],
          rotate:[0,5,0]
        }}

        transition={{
          repeat:Infinity,
          duration:5
        }}

        className="
        absolute
        top-40
        right-20
        w-28
        opacity-20
        hidden
        md:block
        "

      />

      {/* BREAD */}

      <motion.img

        src="/bread.png"

        alt=""

        animate={{
          y:[0,-15,0]
        }}

        transition={{
          repeat:Infinity,
          duration:6
        }}

        className="
        absolute
        bottom-24
        left-24
        w-28
        opacity-20
        hidden
        lg:block
        "

      />

      {/* MILK */}

      <motion.img

        src="/milk.png"

        alt=""

        animate={{
          y:[0,15,0]
        }}

        transition={{
          repeat:Infinity,
          duration:5
        }}

        className="
        absolute
        bottom-24
        right-20
        w-24
        opacity-20
        hidden
        lg:block
        "

      />

      {/* ORANGE */}

      <motion.img

        src="/orange.png"

        alt=""

        animate={{
          rotate:[0,10,0]
        }}

        transition={{
          repeat:Infinity,
          duration:7
        }}

        className="
        absolute
        top-1/2
        left-1/4
        w-20
        opacity-20
        hidden
        lg:block
        "

      />

      {/* MAIN CONTENT */}

      <motion.div

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        className="
        text-center
        relative
        z-10
        px-5
        "

      >

        {/* SMALL LABEL */}

        <p className="
        uppercase
        tracking-[5px]
        text-[#6B7A52]
        font-semibold
        mb-5
        ">

          Luxury Grocery Collection

        </p>

        {/* TITLE */}

        <h1 className="
        text-5xl
        md:text-7xl
        font-bold
        text-[#4A3428]
        leading-tight
        max-w-5xl
        ">

          Premium Grocery
          Experience

        </h1>

        {/* SUBTEXT */}

        <p className="
        mt-8
        text-gray-700
        text-lg
        md:text-xl
        max-w-2xl
        mx-auto
        leading-8
        ">

          Fresh artisan groceries with elegant
          modern shopping inspired by timeless
          luxury aesthetics.

        </p>

        {/* BUTTONS */}

        <div className="
        flex
        flex-col
        md:flex-row
        gap-5
        justify-center
        mt-10
        ">

          <button

  onClick={() => {

    document
      .getElementById("products")
      ?.scrollIntoView({

        behavior:"smooth"

      });

  }}

  className="
  bg-[#6B7A52]
  text-white
  px-8
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

  Shop Premium

</button>

          <button

  onClick={() => {

    document
      .getElementById("products")
      ?.scrollIntoView({

        behavior:"smooth"

      });

  }}

  className="
  bg-white/40
  backdrop-blur-lg
  border
  border-white/30
  px-8
  py-4
  rounded-2xl
  shadow-lg
  transition-all
  duration-150
  hover:scale-105
  active:scale-95
  "

>

  Explore Collection

</button>

        </div>

      </motion.div>

    </section>

  );

};

export default Hero;