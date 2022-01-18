import styled from "styled-components";

const HeaderSectionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  .header-banner {
    width: 30%;
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      width: 100%;
      height: 240px;
      border-radius: 12px;
    }
  }
`;

export { HeaderSectionContainer } ;