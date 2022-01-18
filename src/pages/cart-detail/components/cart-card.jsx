import { CartCardContainer } from "./cart-card.style";
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone";
import RemoveCircleTwoToneIcon from "@mui/icons-material/RemoveCircleTwoTone";
import { useDispatch } from "react-redux";
import { addProduct, minusProduct } from "../../../redux/actions";

const CartCard = (props) => {
  const dispatch = useDispatch();
    const { res } = props;
    return (
      <CartCardContainer>
        <div className="image-container">
          <img src={res.image} alt="image1" />
        </div>
        <div className="title-container">
          <p>{res.title.length > 0 ? res.title.substr(0, 41) : res.title}</p>
          <div className="product-button-count">
            <AddCircleTwoToneIcon
              className="add-product"
              onClick={() => dispatch(addProduct(res.id))}
            />
            <p className="product-count">{res.qty}</p>
            <RemoveCircleTwoToneIcon
              className="remove-product"
              onClick={() => dispatch(minusProduct(res.id))}
            />
          </div>
        </div>
        <div className="detail-container">
          <p>{res.qty}</p>
          <p>
            {res.price}
            <span>$</span>
          </p>
          <p>
            {res.fullPrice}
            <span>$</span>
          </p>
        </div>
      </CartCardContainer>
    );
}
 
export default CartCard;