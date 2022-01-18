import { MainProductCard } from "./product-card.style";
import { addProduct, minusProduct } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import Rating from "@mui/material/Rating";

const ProductCard = (props) => {
  const { res, cardWidth, marginTop } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.prodcutReducer.cart);

  return (
    <MainProductCard cardWidth={cardWidth} marginTop={marginTop}>
      <div className="product-image-container">
        <img src={res.image} alt={`img ${res.id}`} />
      </div>
      <p className="cardTitle">{res.title}</p>
      <p className="cardPrice">{`${res.price}$`}</p>
      <Rating
        className="rating"
        name="half-rating-read"
        defaultValue={res?.rating?.rate}
        precision={0.5}
        readOnly
      />
      <button onClick={() => dispatch(addProduct(res.id))}>+</button>
      <div
        className="display-count-container"
        style={{
          display:
            cart.find((product) => product.id === res.id)?.qty > 0
              ? "inline-block"
              : "none",
        }}
      >
        <p className="pCounter">
          {cart.find((baketItem) => baketItem.id === res.id)?.qty}
        </p>
        <button onClick={() => dispatch(minusProduct(res.id))}>-</button>
      </div>
    </MainProductCard>
  );
};

export default ProductCard;
