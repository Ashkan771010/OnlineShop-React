import { useState, useRef } from "react";
import { Conatiner, ResponsiveNavbar } from "./nav-bar.style";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Toggle from "./components/Toggle";
import NavAccordion from "./components/Accordion";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getText } from "../../redux/actions";
import Backdrop from "@mui/material/Backdrop";

const NavBar = (props) => {
  const { theme, setTheme, isResponsive, setIsResponsive } = props;
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.prodcutReducer.cart);

  const linkText = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenHover = () => {
    setIsOpen((oldState) => !oldState);
  };

  const handleCloseHover = () => {
    setIsOpen((newState) => !newState);
  };
  
  const handleBackdrop = () => {
    setIsResponsive(false);
  }
  return (
    <>
      <Conatiner>
        <div
          className="menu-wrraper"
          onMouseLeave={() => setTimeout(setIsOpen(false), 600)}
        >
          {isResponsive ? (
            <CloseIcon
              className="menu-icon"
              onClick={() => setIsResponsive(false)}
            />
          ) : (
            <MenuIcon
              className="menu-icon"
              onClick={() => setIsResponsive(true)}
            />
          )}
          <div className="dark-light">
            <Toggle setTheme={setTheme} theme={theme} />
          </div>
          <div className="nav-items">
            <Link to="/">خانه</Link>
            <a
              href="#w"
              onMouseOver={handleOpenHover}
              onMouseLeave={() => setTimeout(setIsOpen(false), 2000)}
              className="product-nav"
            >
              محصولات
              <i className="arrow down"></i>
            </a>
            <Link to="/About-us">درباره ما</Link>
            <Link to="/Contact-us">ارتباط با ما</Link>
          </div>
          <div className="nav-cart">
            <FavoriteTwoToneIcon className="heart-icon" />
            <Link to="/Cart-detail">
              <Badge color="success" badgeContent={counter.length}>
                <LocalMallTwoToneIcon className="cart-icon" />
              </Badge>
            </Link>
          </div>
        </div>
        <div
          onMouseOver={() => setIsOpen(true)}
          onMouseLeave={() => setTimeout(handleCloseHover, 600)}
          className="product-title"
          style={{
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden",
            zIndex: isOpen ? "10000" : "-1",
            transition: "all .2s",
          }}
        >
          <div className="product-sub-menu">
            <span className="sub-menu-title">
              لباس مردانه
              <i className="arrow"></i>
            </span>
            <ul>
              <li className="li-sub-title">
                <Link
                  to="/Men-cloth"
                  ref={linkText}
                  onClick={() => dispatch(getText(linkText.current.text))}
                >
                  لباس مردانه بزرگسال
                </Link>
              </li>
              <li className="li-sub-title">
                <Link to="/Boy-cloth">لباس پسرانه</Link>
              </li>
              <li className="li-sub-title">
                <Link to="/Men-cloth-discount">لباس مردانه تخفیف دار</Link>
              </li>
            </ul>
          </div>
          <div className="product-sub-menu">
            <span className="sub-menu-title">
              لباس زنانه
              <i className="arrow"></i>
            </span>
            <ul>
              <li className="li-sub-title">
                <Link to="/Women-cloth">لباس زنانه بزرگسال</Link>
              </li>
              <li className="li-sub-title">
                <Link to="/Women-cloth">لباس دخترانه</Link>
              </li>
              <li className="li-sub-title">
                <Link to="/Women-cloth">لباس زنانه تخفیف دار</Link>
              </li>
            </ul>
          </div>
          <div className="product-sub-menu">
            <span className="sub-menu-title">
              لوازم الکترونیکی
              <i className="arrow"></i>
            </span>
            <ul>
              <li className="li-sub-title">
                <Link to="/Electronics">لوازم کامپیوتری</Link>
              </li>
              <li className="li-sub-title">
                <Link to="/Electronics">تلویزیون</Link>
              </li>
            </ul>
          </div>
          <div className="product-sub-menu">
            <span className="sub-menu-title">
              جواهرات
              <i className="arrow"></i>
            </span>
            <ul>
              <li className="li-sub-title">
                <Link to="/Jwellery">جواهرات زنانه</Link>
              </li>
              <li className="li-sub-title">
                <Link to="/Jwellery">جواهرات مردانه</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="all-products">
            مشاهده تمام محصولات
          </Link>
        </div>
      </Conatiner>
      <Backdrop
        sx={{ color: "#FFF", zIndex: "99" }}
        open={isResponsive}
        onClick={handleBackdrop}
      />
      <ResponsiveNavbar
        style={{
          transition: "all .4s",
          right: isResponsive ? "0px" : "-300px",
        }}
      >
        <Link to="/">خانه</Link>
        <NavAccordion />
        <Link to="/About-us">درباره ما</Link>
        <Link to="/Contact-us">ارتباط با ما</Link>
      </ResponsiveNavbar>
    </>
  );
};

export default NavBar;
