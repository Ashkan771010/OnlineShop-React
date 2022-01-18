import styled from "styled-components";

const MainProductCard = styled.div`
  background-color: white;
  position: relative;
  width: ${(props) => props.cardWidth};
  margin-top: ${(props) => props.marginTop};
  height: 420px;
  border-radius: 10px;
  box-shadow: 0px 1px 15px 4px rgba(0, 0, 0, 0.30);
  /* border: 2px solid lightgrey; */
  transition: box-shadow 0.3s ease-out;

  @media (max-width: 450px) {
    .cardTitle {
      font-size: 22px;
      font-family: "iranSans";
    }
  }

  @media (min-width: 450px) {
    .cardTitle {
      font-size: 22px;
      font-family: "iranSans";
    }
  }

  .product-image-container {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 5px;

    img {
      width: 60%;
      height: 150px;
    }
  }

  .cardTitle {
    text-align: left;
    color: black;
    margin-left: 6px;
    margin-top: 30px;
    font-size: 15px;
    font-weight: bold;
    font-family: "iranSansB";
  }

  .cardPrice {
    position: absolute;
    bottom: 30px;
    left: 10px;
    color: black;
    font-size: 21px;
    font-family: "iranSansB";
  }

  .rating {
    background-color: white;
    padding: 0;
    color: none;
    direction: ltr;
    position: absolute;
    bottom: 5px;
    left: 8px;

    span {
      padding: 0;
      background-color: white;
      font-size: 22px;
      color: #faaf00;
    }
  }

  button {
    width: 25px;
    height: 25px;
    position: absolute;
    bottom: 15px;
    right: 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  .display-count-container {
    position: absolute;
    right: 25px;
    bottom: 15px;

    button {
      width: 25px;
      height: 25px;
      position: absolute;
      bottom: 1px;
      right: 35px;
      border-radius: 50%;
    }

    .pCounter {
      color: black;
      position: absolute;
      bottom: -4px;
      right: 15px;
      font-size: 20px;
      font-family: "iranSansB";
    }
  }
`;

export { MainProductCard };
