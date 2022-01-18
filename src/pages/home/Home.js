import { useEffect } from 'react';
import SiteProperty from "./components/site-property/site-property";
import Category from "./components/category/category";
import ShowProduct from "./components/product-container/product-show";
import HeaderSection from "./components/header-section/header-section";
import Comment from "./components/comment/comment";


const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderSection />
      <SiteProperty />
      <Category />
      <ShowProduct />
      <Comment />
    </>
  );
};

export default Home;
