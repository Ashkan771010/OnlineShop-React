import styled from "styled-components";
import Modal from "@mui/material/Modal";

const StyledModal = styled(Modal)`
  .MuiBox-root {
    background-color: white;
    width: 50%;
    margin: 130px auto 0 auto;
    text-align: center;
    /* height: 300px; */
    padding: 20px 0;
    position: relative;
    border-radius: 5px;

    .success-icon {
      color: ${(props) => props.theme.bg.properyCard};
      font-size: 90px;
    }

    p {
      font-family: "IRANSansB";
      font-size: 20px;
      padding: 0 40px;
    }

    button {
      margin-top: 80px;
      width: 90%;
      padding: 8px 0;
      background-color: white;
      font-family: "IRANSansB";
      font-size: 15px;
      color: ${(props) => props.theme.bg.properyCard};
      border: 2px solid ${(props) => props.theme.bg.properyCard};
      transition: all 0.3s ease;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        color: #f5f5f5;
        background-color: ${(props) => props.theme.bg.properyCard};
      }
    }
  }

  @media (max-width: 700px) {
    .MuiBox-root {
      width: 70%;
    }
  }
  @media (max-width: 550px) {
    .MuiBox-root {
      width: 90%;
    }
  }
`;

export { StyledModal };
