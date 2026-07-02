import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Search from "./Pages/Search/Search";
import ProductOverview from "./Pages/ProductOverview/ProductOverview";
import Compare from "./Pages/Compare/Compare";
import About from "./Pages/About/About";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop/>

      <Navbar />

      <Routes>

        <Route element={<Layout />} />

        <Route path="/" element={<Home />} />

        <Route path="/Search" element={<Search />} />

        <Route path="/Product" element={<ProductOverview />} />

        <Route path="/Compare" element={<Compare />} />

        <Route path="/About" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;



// import Navbar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer'
// import Hero from './Components/Hero/Hero'
// import Platform from './Components/Platform/Platform'
// import ChooseUs from './Components/ChooseUs/ChooseUs'
// import HotDeals from './Components/HotDeals/HotDeals'



// const App = () => {
//   return (
//     <div className='container'>
//       <Navbar />
//       <Hero />
//       <Platform />
//       <ChooseUs />
//       <HotDeals />
//       <Footer />
     
//     </div>
//   )
// }

// export default App

// import Navbar from './components/Navbar/Navbar'
// import Search from './pages/Search/Search'
// import Footer from './components/Footer/Footer'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Search />
//       <Footer />
//     </>
//   )
// }

// export default App

