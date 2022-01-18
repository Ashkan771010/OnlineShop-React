import { CategoryContainer } from "./category.style";
import CategoryCard from "./category-card";
import MenClothCategory from "../../../../assets/images/men-cloth.png";
import WomenClothCategory from "../../../../assets/images/wemon-cloth.png";
import ElectronicsCategory from "../../../../assets/images/electronics.png";
import JwelleryCategory from "../../../../assets/images/jwellery.png";

const Category = () => {
    return (
      <CategoryContainer>
        <div className="site-product-title">
          <h1>
            محصولات <span>سایت ما</span>
          </h1>
        </div>
        <div className="site-product">
          <CategoryCard img={MenClothCategory} title="لباس مردانه" />
          <CategoryCard img={WomenClothCategory} title="لباس زنانه" />
          <CategoryCard img={ElectronicsCategory} title="لوازم الکترونیکی" />
          <CategoryCard img={JwelleryCategory} title="جواهرات" />
        </div>
      </CategoryContainer>
    );
}
 
export default Category;