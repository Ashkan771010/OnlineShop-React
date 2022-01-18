import styled from "styled-components";

const PropertyCardDiv = styled.div`
  width: 300px;
  padding: 8px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.bg.properyCard};
  transition: background 0.7s ease;

  @media (max-width: 1200px) {
    flex: 0 0 34%;
    margin-top: 30px;
  }

  @media (max-width: 874px) {
    flex: 0 0 38%;
    margin-top: 30px;
  }

  @media (max-width: 800px) {
    flex: 0 0 42%;
    margin-top: 30px;
  }

  @media (max-width: 700px) {
    flex: 0 0 48%;
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    flex: 0 0 55%;
    margin-top: 20px;
  }

  @media (max-width: 550px) {
    flex: 0 0 75%;
    margin-top: 20px;
  }

  @media (max-width: 400px) {
    flex: 0 0 90%;
    margin-top: 20px;
  }

  .property-number {
    font-family: "IRANSansB";
    font-size: 22px;
    padding: 0 10px;
    color: ${(props) => props.theme.text.spanColor};
    transition: color 0.7s ease;
    /* text-align: center; */
  }

  .property-description {
    display: flex;
    background-color: ${(props) => props.theme.bg.gg};
    transition: background 0.7s ease;
    align-items: center;

    .triangle-left {
      width: 0;
      height: 0;
      border-top: 11px solid transparent;
      border-right: 15px solid ${(props) => props.theme.bg.properyCard};
      transition: border 0.7s ease;
      border-bottom: 11px solid transparent;
    }

    .property-content {
      padding: 10px 0;
      width: 215px;
      margin-left: 5px;

      h4 {
        font-family: "IRANSansB";
        font-size: 18px;
        color: ${(props) => props.theme.text.color1};
        transition: color 0.7s ease;
      }

      p {
        font-family: "IRANSans";
        font-size: 15px;
        color: ${(props) => props.theme.text.color1};
        transition: color 0.7s ease;
      }
    }
  }
`;

export { PropertyCardDiv };
