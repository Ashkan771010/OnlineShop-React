import styled from "styled-components";



const Conatiner = styled.div`
  width: 100%;
  height: 10%;
  z-index: 100;
  position: fixed;
  top: 0;

  .menu-wrraper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    transition: background 0.5s ease;
    z-index: 100;
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  }

  .menu-icon {
    display: none;
    color: ${(props) => props.theme.bg.properyCard};
    transition: color 0.4s ease;

    @media (max-width: 920px) {
      display: block;
      position: absolute;
      top: 23%;
      right: 8px;
      font-size: 40px;
      cursor: pointer;
    }
  }

  .dark-light {
    width: 8%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 920px) {
      margin-right: 60px;
    }
  }

  .product-title {
    padding-top: 20px;
    opacity: 0;
    visibility: hidden;
    width: 650px;
    height: 294px;
    background-color: white;
    position: absolute;
    left: 26%;
    top: 63px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 0 0 5px 5px;
    box-shadow: 0 3px 5px 0 rgb(0 0 0 / 20%);

    @media (max-width: 920px) {
      display: none;
    }
  }

  .nav-items {
    width: 40%;
    display: flex;
    justify-content: space-around;
    font-family: "IRANSansB";
    align-items: center;

    @media (max-width: 920px) {
      display: none;
    }

    .arrow {
      border: solid black;
      margin-right: 8px;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
    }
  }

  .nav-items a {
    position: relative;
    text-decoration: none;
    color: black;
    font-size: 18px;

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      top: 100%;
      left: 0;
      background: ${(props) => props.theme.bg.properyCard};
      transition: transform 1s;
      transform: scaleX(0);
      transform-origin: left;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: right;
    }
  }

  .nav-cart {
    width: 8%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 920px) {
      margin-left: 20px;
    }
  }

  .cart-icon {
    color: purple;
    font-size: 27px;
    cursor: pointer;

    @media (max-width: 920px) {
      margin-left: 10px;
      font-size: 34px;
    }
  }

  .heart-icon {
    color: red;
    font-size: 27px;
    cursor: pointer;

    @media (max-width: 920px) {
      margin-left: 15px;
      font-size: 34px;
    }
  }

  .product-sub-menu {
    margin-right: 30px;

    &:nth-of-type(1) {
      margin-right: 5px;
    }

    ul {
      margin-top: 40px;
      list-style: none;
    }

    ul li {
      margin-top: 15px;
      text-decoration: none;
    }

    ul li a {
      color: black;
      text-decoration: none;
      font-family: "IRANSans";
      font-size: 15px;
      transition: all 0.3s;

      &:hover {
        color: #ff9000;
      }
    }

    span {
      font-family: "IRANSansB";
      font-size: 14px;
    }

    .arrow {
      border: solid black;
      margin-right: 8px;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
    }
  }

  .all-products {
    position: absolute;
    background-color: ${(props) => props.theme.bg.properyCard};
    bottom: 15px;
    left: 20px;
    padding: 2px 15px;
    display: inline-block;
    box-shadow: 0 0 4px 0 rgb(0 0 0 / 20%);
    border-radius: 50px;
    font-size: 14px;
    font-family: "IRANSansB";
    color: white;
    text-decoration: none;
  }
`;

const ResponsiveNavbar = styled.div`
  z-index: 100;
  background-color: #fFFFFF;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: "IRANSansB";
  width: 200px;
  right: -300px;
  top: calc(20% - 10%);
  border-top: 0;
  height: 100vh;
  overflow-y: hidden;
  box-shadow: -4px 10px 5px 0px rgb(0 0 0 / 20%);

  a {
    font-size: 20px;
    margin-top: 20px;
    text-decoration: none;
    color: black;
    margin-right: 14px;
  }
`;

export { Conatiner, ResponsiveNavbar };
