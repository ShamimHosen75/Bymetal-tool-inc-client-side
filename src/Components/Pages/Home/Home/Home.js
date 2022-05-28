import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import NavBar from '../../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Products></Products>
      <Contact></Contact>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
