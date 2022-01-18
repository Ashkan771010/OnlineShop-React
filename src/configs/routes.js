import Products from "../component/products/Products";
import AboutUs from "../pages/about-us/AboutUs";
import ContactUs from "../pages/contact-us/ContactUs";
import Home from "../pages/home/Home";
import CartDetail from "../pages/cart-detail/CartDetail";
import { apiCategoryTitles } from "../pages/home/components/product-container/product-show";
import UserInfo from "../pages/user-info/UserInfo";

const ROUTES = [
  {
    title: "خانه",
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    title: "درباره ما",
    path: "/About-us",
    exact: true,
    element: <AboutUs />,
  },
  {
    title: "ارتباط با ما",
    path: "/Contact-us",
    exact: true,
    element: <ContactUs />,
  },
  {
    title: "لباس مردانه",
    path: "/Men-cloth",
    exact: true,
    element: <Products fillterItem={apiCategoryTitles.MenClothTitle} />,
  },
  {
    title: "لباس پسرانه",
    path: "/Boy-cloth",
    exact: true,
    element: <Products fillterItem={apiCategoryTitles.MenClothTitle} />,
  },
  {
    title: "لباس مردانه نخفیف دار",
    path: "/Men-cloth-discount",
    exact: true,
    element: <Products fillterItem={apiCategoryTitles.MenClothTitle} />,
  },
  {
    title: "لباس زنانه",
    path: "/Women-cloth",
    exact: true,
    element: <Products fillterItem={apiCategoryTitles.WomenClothTitle} />,
  },
  {
    title: "جواهرات",
    path: "/Jwellery",
    exact: true,
    element: <Products fillterItem={apiCategoryTitles.JwelleryTitle} />,
  },
  {
    title: "لوازم الکترونیکی",
    path: "/Electronics",
    exact: true,
    element: <Products fillterItem={apiCategoryTitles.ElectronicsTitle} />,
  },
  {
    title: "سبد خرید",
    path: "/Cart-detail",
    exact: true,
    element: <CartDetail />,
  },
  {
    title: "اطلاعات",
    path: "/User-info",
    exact: true,
    element: <UserInfo />,
  },
];

export default ROUTES;