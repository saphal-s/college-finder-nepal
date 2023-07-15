import React from "react";
import Header from "./components/header/Header";
import Banner from "./components/header/Banner";
import Search from "./components/header/Search";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <Banner />
      <hr />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
