import styled from "styled-components";

const CartDetailContainer = styled.div`
  width: 100%;

  .empty-container {
    width: 100%;
    margin: 140px auto;
    display: flex;
    justify-content: center;

    img {
      width: 40%;
      max-height: 100%;
    }
  }

  .cart-title {
    color: ${(props) => props.theme.text.color1};
    transition: color 0.7s ease;
    margin-top: 115px;
    float: right;
    font-family: "IRANSansB";
    font-size: 28px;
    margin-right: 30px;
  }

  .cart-detail {
    width: 417px;
    margin-top: 130px;
    margin-bottom: 40px;
    color: ${(props) => props.theme.text.color1};
    transition: color 0.7s ease;
    float: left;
    display: flex;
    justify-content: space-around;
    font-family: "IRANSansB";
    font-size: 20px;
  }

  .cart-card {
    width: 100%;
  }

  .total-price-div {
    margin-bottom: 120px;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    background: ${(props) => props.theme.bg.properyCard};
    border: 2px solid ${(props) => props.theme.border.categoryCard};
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    direction: rtl;
    border-radius: 8px;
    font-family: "iranSansB";
    padding: 20px 10px;

    .continue-shoping {
      text-decoration: none;
      background-color: #ff2626;
      transition: background 0.7s ease;
      color: white;
      transition: color 0.7s ease;
      border-radius: 5px;
      padding: 10px;
    }

    span {
      color: red;
    }

    p {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      font-size: 18px;
    }
  }

  @media (max-width: 800px) {
    .empty-container {
      img {
        width: 80%;
      }
    }
  }

  @media (max-width: 700px) {
    .cart-detail {
      width: 350px;
    }
  }

  @media (max-width: 550px) {
    .cart-title {
      float: none;
      text-align: center;
      margin-right: 0;
    }
    .cart-detail {
      margin-top: 90px;
      /* transform: translateX(10%); */
      width: 100%;
    }
  }
`;

export { CartDetailContainer };
