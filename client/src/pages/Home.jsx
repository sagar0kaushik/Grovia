import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {

  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <Hero />

      <Products search={search} />

      <Footer />
    </>
  );
};

export default Home;