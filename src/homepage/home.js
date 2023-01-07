import React, { useContext } from "react";
import Generalproductlist from "./generalproductlist";
import { DataContext } from "../App";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Parallax from "../components/Parallax/Parallax";
import Footer from "../components/Footer/Footer";
function Home() {
  const { datas, setData } = useContext(DataContext);
  return (
    <div>
      <Hero></Hero>
      <Generalproductlist></Generalproductlist>
      <Parallax></Parallax>
      <Footer></Footer>
    </div>
  );
}

export default Home;
