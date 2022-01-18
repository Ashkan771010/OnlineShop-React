import ProductCard from "../product-card/product-card";
import { ProductsContainer } from "./products.syle";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Products = (props) => {
  const { fillterItem } = props;
  const text = useSelector((state) => state.prodcutReducer.text);
  const allProducts = useSelector((state) => state.prodcutReducer.products);
  console.log(text);
  const filterdProducts = allProducts.filter(
    (product) => product.category === fillterItem
  );

  return (
    <ProductsContainer>
      <div className="path">
        <Breadcrumbs>
          <Link underline="hover" color="inherit" to="/">
            خانه
          </Link>
          <Link underline="hover" color="inherit" to="/">
            محصولات
          </Link>
          <Link underline="hover" color="inherit" to="/">
            {text}
          </Link>
        </Breadcrumbs>
      </div>
      <div className="product-count">
        <p>{filterdProducts.length} کالا</p>
      </div>
      <div className="show-product">
        {filterdProducts.map((res) => {
          return (
            <ProductCard
              res={res}
              cardWidth="300px"
              marginTop="40px"
              key={res.id}
            />
          );
        })}
      </div>
    </ProductsContainer>
  );
};

export default Products;
