import styled from "styled-components";

const ProductContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  text-align: center;

  span {
    font-size: 28px;
    font-family: "IRANSansB";
    background-color: ${(props) => props.theme.bg.properyCard};
    padding: 3px 15px;
    border-radius: 3px;
    color: ${(props) => props.theme.text.spanColor};
  }

  .product-wrraper {
    margin-top: 50px;
    width: 100%;
    height: 560px;
    background-color: #fd7014;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .container-image {
    background-color: #fcfcfc;
    width: 30%;
    height: 420px;

    img {
      max-width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .container {
    width: 65%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .container-title {
    width: 80%;
    text-align: center;

    h1 {
      font-family: "IRANSansB";
      color: white;
    }
  }

  .container-slider {
    width: 100%;
    height: 90%;
  }
`;

export { ProductContainer };
