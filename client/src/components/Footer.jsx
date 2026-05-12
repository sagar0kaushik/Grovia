const Footer = () => {

  return (

    <footer className="
    bg-gradient-to-r
    from-[#1E2816]
    to-[#2E381F]
    text-[#D6D0B8]
    mt-32
    px-10
    md:px-24
    py-20
    ">

      <div className="
      grid
      md:grid-cols-4
      gap-16
      ">

        {/* LEFT */}

        <div>

          <h1 className="
          text-5xl
          font-serif
          text-[#F5E6A9]
          ">

            GROVIA

          </h1>

          <p className="
          mt-8
          leading-9
          italic
          text-lg
          max-w-[300px]
          ">

            Defining the gold standard in daily
            nourishment and artisanal grocery
            services.

          </p>

        </div>

        {/* EXPLORE */}

        <div>

          <h2 className="
          uppercase
          tracking-[3px]
          text-[#F5E6A9]
          text-sm
          font-bold
          ">

            Explore

          </h2>

          <div className="
          mt-8
          flex
          flex-col
          gap-5
          text-lg
          ">

            <p className="cursor-pointer hover:text-white">
              Our Story
            </p>

            <p className="cursor-pointer hover:text-white">
              Weekly Harvest
            </p>

            <p className="cursor-pointer hover:text-white">
              Subscriptions
            </p>

          </div>

        </div>

        {/* SUPPORT */}

        <div>

          <h2 className="
          uppercase
          tracking-[3px]
          text-[#F5E6A9]
          text-sm
          font-bold
          ">

            Support

          </h2>

          <div className="
          mt-8
          flex
          flex-col
          gap-5
          text-lg
          ">

            <p className="cursor-pointer hover:text-white">
              Delivery Policy
            </p>

            <p className="cursor-pointer hover:text-white">
              Privacy Registry
            </p>

            <p className="cursor-pointer hover:text-white">
              Contact Concierge
            </p>

          </div>

        </div>

        {/* NEWSLETTER */}

        <div>

          <h2 className="
          uppercase
          tracking-[3px]
          text-[#F5E6A9]
          text-sm
          font-bold
          ">

            Newsletter

          </h2>

          <div className="mt-8">

            <div className="
            flex
            items-center
            border-b
            border-[#6B745C]
            pb-3
            ">

              <input

                type="email"

                placeholder="Your Email"

                className="
                bg-transparent
                outline-none
                flex-1
                text-lg
                placeholder:text-[#A8A28B]
                "

              />

              <button className="
              uppercase
              text-[#F5E6A9]
              text-sm
              font-bold
              hover:text-white
              ">

                Join

              </button>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="
      mt-20
      border-t
      border-[#49503D]
      pt-10
      flex
      flex-col
      md:flex-row
      justify-between
      text-sm
      tracking-[2px]
      text-[#8E917B]
      ">

        <p>
          © 2026 GROVIA GROCERIES. ALL RIGHTS RESERVED.
        </p>

        <p className="mt-4 md:mt-0">
          DESIGNED FOR EXCELLENCE
        </p>

      </div>

    </footer>

  );

};

export default Footer;