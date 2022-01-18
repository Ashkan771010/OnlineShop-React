import styled from "styled-components";

const CategoryContainer = styled.div`
  margin-top: 210px;
  margin-bottom: 150px;

  .site-product-title {
    text-align: center;
    font-family: "IRANSansB";

    h1 {
      color: ${(props) => props.theme.text.color1};
      transition: color 0.7s ease;
    }

    span {
      background-color: ${(props) => props.theme.bg.properyCard};
      transition: background 0.7s ease;
      padding: 3px 15px;
      border-radius: 3px;
      color: ${(props) => props.theme.text.spanColor};
      transition: color 0.7s ease;
    }
  }

  .site-product {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export { CategoryContainer };
