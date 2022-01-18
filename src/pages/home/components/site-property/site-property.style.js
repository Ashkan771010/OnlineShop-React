import styled from "styled-components";

const PropertyDiv = styled.div`
  width: 100%;
  margin-top: 150px;
  text-align: center;

  .property-title {
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

  .property-card {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 150px;
    background-color: ${(props) => props.theme.bg.propertyBack};
    transition: background 0.7s ease;
    padding: 50px 0;
    /* margin-bottom: 150px; */
  }
`;

export { PropertyDiv };
