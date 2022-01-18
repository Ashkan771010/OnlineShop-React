import { useEffect } from "react";
import ProductSlider from "../slider/product-slider";
import { ProductContainer } from "./product-container.style";
import { useDispatch } from "react-redux";
import { callApi } from "../../../../redux/actions";
import apiService from "../../../../app/apiService";

const HomeProductWrraper = (props) => {
    const { categoryImage, categoryTitle, categoryFilterTitle } = props;

    const dispatch = useDispatch();

    const fetchProducts = async () => {
      const response = await apiService.get("products/").catch((err) => {
        console.log("err", err);
      });
      dispatch(callApi(response.data));
    };

    useEffect(() => {
      fetchProducts();
    }, []);

    return (
      <ProductContainer>
        <span>{categoryTitle}</span>
        <div className="product-wrraper">
          <div className="container-image">
            <img src={categoryImage} alt="ProductImage" />
          </div>
          <div className="container">
            <div className="container-slider">
              <ProductSlider filterTitle={categoryFilterTitle} />
            </div>
          </div>
        </div>
      </ProductContainer>
    );
}
 
export default HomeProductWrraper;