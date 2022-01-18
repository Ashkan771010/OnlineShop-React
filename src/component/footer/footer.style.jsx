import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: right;
  font: bold 16px IRANSansB;
  padding: 55px 50px;
  margin-top: 110px;
  direction: rtl;
  /* position: absolute;
  bottom: 0; */

  & .footer-left,
  & .footer-center,
  & .footer-right {
    display: inline-block;
    vertical-align: top;
  }

  & .footer-left {
    width: 35%;
  }

  & h3 {
    color: #ffffff;
    font: normal 36px "Cookie", cursive;
    margin: 0;
  }

  & h3 span {
    color: #5383d3;
  }

  & .footer-links {
    color: #ffffff;
    margin: 20px 0 12px;
    padding: 0;
  }

  & .footer-links {
    a {
      display: block;
      line-height: 1.8;
      text-decoration: none;
      color: inherit;
    }
  }

  & .footer-company-name {
    color: #8f9296;
    font-size: 14px;
    font-weight: normal;
    margin: 0;
  }

  & .footer-center {
    width: 30%;
  }

  & .footer-center {
    .MuiSvgIcon-root {
      /* background-color: #33383b; */
      color: #ffffff;
      font-size: 15px;
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 42px;
      margin: 10px 15px;
      vertical-align: middle;
    }

    .address-container {
      display: flex;
      align-items: center;
    }

    .phone-container {
      display: flex;
      align-items: center;
    }

    .email-container {
      display: flex;
      align-items: center;
    }
  }

  & .footer-center {
    p {
      display: inline-block;
      color: #ffffff;
      vertical-align: middle;
      margin: 0;
    }
  }

  & .footer-center p span {
    display: block;
    font-weight: normal;
    font-size: 14px;
    line-height: 2;
  }

  & .footer-center p a {
    color: #5383d3;
    text-decoration: none;
  }

  & .footer-right {
    width: 30%;
    margin-right: 40px;
  }

  & .footer-company-about {
    line-height: 20px;
    color: #92999f;
    font-size: 13px;
    font-weight: normal;
    margin: 0;
  }

  & .footer-company-about span {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & .footer-icons {
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  & .footer-icons a {
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: #33383b;
    border-radius: 2px;
    font-size: 22px;
    color: #ffffff;
    text-align: center;
    line-height: 35px;
    margin-right: 10px;

    .MuiSvgIcon-root {
      vertical-align: middle;
    }
  }

  @media (max-width: 880px) {
    .footer-distributed {
      font: bold 14px IRANSans;
    }

    & .footer-icons {
      justify-content: center;
    }

    & .footer-left,
    & .footer-center,
    & .footer-right {
      display: block;
      width: 100%;
      margin-bottom: 40px;
      text-align: center;
    }

    & .footer-center i {
      margin-left: 0;
    }
  }
`;

export { FooterContainer };
