import { UserInfoContainer } from "./user-info.style";
import { useEffect, useReducer } from "react";
import ModalPopup from "../../component/modal/ModalPopup";
import { useState } from "react";

function reducer(state = "", action) {
  switch (action.type) {
    case "ON_CHANGE": {
      const newValue = action.payload;
      return newValue;
    }
    default: {
      return state;
    }
  }
}

const UserInfo = () => {
  const [open, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, "");
  console.log(state);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <UserInfoContainer>
      <div className="title">ثبت اطلاعات</div>
      <div className="content">
        <form action="#">
          <div className="user-details">
            <div className="input-box">
              <span className="details">نام و نام خانوادگی</span>
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                required
                onChange={(event) =>
                  dispatch({ type: "ON_CHANGE", payload: event.target.value })
                }
              />
            </div>
            <div className="input-box">
              <span className="details">کد پستی</span>
              <input
                type="number"
                placeholder="کد پستی"
                required
                onChange={(event) =>
                  dispatch({ type: "ON_CHANGE", payload: event.target.value })
                }
              />
            </div>
            <div className="input-box">
              <span className="details">ایمیل</span>
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                required
                onChange={(event) =>
                  dispatch({ type: "ON_CHANGE", payload: event.target.value })
                }
              />
            </div>
            <div className="input-box">
              <span className="details">شماره موبایل</span>
              <input
                type="number"
                placeholder="شماره موبایل خود را وارد کنید"
                required
                onChange={(event) =>
                  dispatch({ type: "ON_CHANGE", payload: event.target.value })
                }
              />
            </div>
            <div className="input-box adress" style={{ width: "100%" }}>
              <span className="details">آدرس کامل</span>
              <input
                type="text"
                placeholder="آدرس کامل خود را وارد کنید"
                required
                onChange={(event) =>
                  dispatch({ type: "ON_CHANGE", payload: event.target.value })
                }
              />
            </div>
          </div>
          <div className="property-details">
            <input type="radio" name="property" id="dot-1" />
            <input type="radio" name="property" id="dot-2" />
            <input type="radio" name="property" id="dot-3" />
            <span className="property-title">ویژگی های اضافی</span>
            <div className="category">
              <label htmlFor="dot-1">
                <span className="dot one"></span>
                <span className="property">گارانتی کالا</span>
              </label>
              <label htmlFor="dot-2">
                <span className="dot two"></span>
                <span className="property">ارسال فاکتور</span>
              </label>
              <label htmlFor="dot-3">
                <span className="dot three"></span>
                <span className="property">گارانتی و ارسال فاکتور</span>
              </label>
            </div>
          </div>
          <div className="button">
            <button type="submit" onClick={state.length > 0 && handleOpenModal}>
              ثبت سفارش
            </button>
            <ModalPopup open={open} handleCloseModal={handleCloseModal} />
          </div>
        </form>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfo;
