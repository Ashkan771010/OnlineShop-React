import HomeProductWrraper from "./product-container";
import MenCloth from "../../../../assets/images/men-cloth.png"
import WomenCloth from "../../../../assets/images/wemon-cloth.png";
import Jwellery from "../../../../assets/images/jwellery.png";
import Electronics from "../../../../assets/images/electronics.png";

export const apiCategoryTitles = {
  MenClothTitle: "men's clothing",
  WomenClothTitle: "women's clothing",
  JwelleryTitle: "jewelery",
  ElectronicsTitle: "electronics",
};

const ShowProduct = () => {

  return (
    <>
      <HomeProductWrraper
        categoryImage={MenCloth}
        categoryTitle="لباس مردانه"
        categoryFilterTitle={apiCategoryTitles.MenClothTitle}
      />
      <HomeProductWrraper
        categoryImage={WomenCloth}
        categoryTitle="لباس زنانه"
        categoryFilterTitle={apiCategoryTitles.WomenClothTitle}
      />
      <HomeProductWrraper
        categoryImage={Jwellery}
        categoryTitle="جواهرات"
        categoryFilterTitle={apiCategoryTitles.JwelleryTitle}
      />
      <HomeProductWrraper
        categoryImage={Electronics}
        categoryTitle="لوازم الکترونیکی"
        categoryFilterTitle={apiCategoryTitles.ElectronicsTitle}
      />
    </>
  );
};

export default ShowProduct;
