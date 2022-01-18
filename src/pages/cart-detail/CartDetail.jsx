import { useEffect, useState } from "react";
import { CartDetailContainer } from "./cart-detail.style";
import CartCard from "./components/cart-card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EmptyCart from "../../assets/images/empty-cart.png";
import { display, margin } from "@mui/system";

const CartDetail = () => {
  const [totalPrice, setTotalPrice] = useState(0);
    const cart = useSelector((state) => state.prodcutReducer.cart);
    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
      let price = 0;

      cart.forEach((item) => {
        price += item.fullPrice;
      });

      setTotalPrice(price);
    }, [cart]);

    return (
      <CartDetailContainer>
        {cart.length > 0 ? (
          <div>
            <div className="cart-title">
              <p>سبد خرید</p>
            </div>
            <div className="cart-detail">
              <p>تعداد</p>
              <p>قیمت</p>
              <p>قیمت کل</p>
            </div>
            <div className="cart-card">
              {cart.map((res) => {
                return <CartCard res={res} key={res.id} />;
              })}
            </div>
            <div className="total-price-div">
              <p>{`تعداد کل محصولات : ${cart.length}`}</p>
              <p>{`قیمت کل : $${totalPrice.toFixed(2)}`}</p>
              <p>
                روش ارسال: <span>عادی</span>
              </p>
              <Link to="/User-info" className="continue-shoping">
                ادامه خرید
              </Link>
            </div>
          </div>
        ) : (
          <div
          className="empty-container"
          >
            <img
              src={EmptyCart}
              alt="Empty Cart"
              style={{
                
              }}
            />
          </div>
        )}
      </CartDetailContainer>
    );
}
 
export default CartDetail;