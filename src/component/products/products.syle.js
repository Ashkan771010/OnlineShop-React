import styled from "styled-components";

const ProductsContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  position: relative;

  .path {
    position: absolute;
    background-color: #f5f5f5;
    width: 300px;
    padding: 10px;
    top: -20px;
    right: 2%;

    a {
      text-decoration: none;
      color: #888a88;
    }

    .MuiBreadcrumbs-ol {
      font-family: "IRANSansB";
    }
  }

  .product-count {
    position: absolute;
    background-color: #f5f5f5;
    width: 300px;
    padding: 10px;
    top: -20px;
    left: 2%;

    p {
      font-family: "IRANSansB";
      color: #888a88;
      float: left;
      margin-left: 10px;
    }
  }

  .show-product {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 120px;
  }
`;

export { ProductsContainer };