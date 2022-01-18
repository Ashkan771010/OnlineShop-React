import styled from "styled-components";

const CartCardContainer = styled.div`
  /* margin-top: 80px; */
  background-color: white;
  border-bottom: 2px solid lightgray;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 0;
  position: relative;

  .image-container {
    width: 100px;
    height: 100px;
    padding: 5px;

    img {
      width: 100%;
      max-height: 100%;
    }
  }

  .title-container {
    width: 40%;
    margin-right: 40px;
    font-family: "IRANSansB";
  }

  .detail-container {
    font-family: "IRANSansB";
    position: absolute;
    left: 50px;
    display: flex;
    justify-content: space-between;
    width: 300px;

    span {
      color: #80c9e0;
    }
  }

  .product-button-count {
    margin-top: 20px;
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .add-product {
      color: #4a4aff;
      font-size: 25px;
      cursor: pointer;
    }

    .remove-product {
      color: #f12020;
      font-size: 25px;
      cursor: pointer;
    }

    .product-count {
      font-family: "IRANSansB";
      font-size: 19px;
    }
  }

  @media (max-width: 870px) {
    .title-container {
      width: 30%;
    }
  }
  @media (max-width: 700px) {
    .title-container {
      width: 25%;
    }
    .detail-container {
      width: 250px;
    }
  }

  @media (max-width: 550px) {
    display: inline-block;

    .title-container {
      margin-right: 0;
      position: absolute;
      left: 8px;
      top: 10px;
      width: 90%;
      text-align: left;

      .product-button-count {
        position: absolute;
        right: 90px;
      }
    }
    .detail-container {
      position: static;
      margin: 10px auto;
      width: 78%;
    }
  }

  @media (max-width: 415px) {
    .title-container {
      width: 50%;

      .product-button-count {
        right: 0px;
      }
    }
  }
`;

export { CartCardContainer };
