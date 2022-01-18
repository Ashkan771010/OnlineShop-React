import styled from "styled-components";

const CategoryCardContainer = styled.div`
  width: 45%;
  height: 300px;
  border-top: 3px solid ${(props) => props.theme.border.categoryCard};
  border-right: 3px solid ${(props) => props.theme.border.categoryCard};
  border-left: 3px solid ${(props) => props.theme.border.categoryCard};
  transition: border 0.7s ease;
  background-color: #fcfcfc;
  position: relative;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-top: 150px;

  @media (max-width: 700px) {
    flex-basis: 80%;
  }

  @media (max-width: 450px) {
    flex-basis: 90%;
  }

  .wrraper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  span {
    display: block;
    position: absolute;
    bottom: -53px;
    right: -3px;
    background-color: ${(props) => props.theme.bg.properyCard};
    transition: background 0.7s ease;
    width: 100%;
    border: 3px solid ${(props) => props.theme.border.categoryCard};
    transition: border 0.7s ease;
    padding: 8px 0;
    text-align: center;
    color: ${(props) => props.theme.text.spanColor};
    transition: color 0.6s ease;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-family: "IRANSansB";
    font-size: 18px;
  }
`;

export { CategoryCardContainer };
