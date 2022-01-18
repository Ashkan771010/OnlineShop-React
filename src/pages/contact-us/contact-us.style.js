import styled from "styled-components";

const ContactUsContainer = styled.div`
  margin: 110px auto;
  overflow: hidden;
  background: #fff;
  width: 70%;
  padding: 25px 40px 10px 40px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 10px;

  .submit-btn1 {
      font-family: "IRANSansB";
    width: 120px;
    height: 40px;
    border: 2px solid #3ceda7;
    border-radius: 24px;
    padding: 8px 40px;
    transition: 0.4s linear;

    &:hover {
      color: #fff;
      background: #3ceda7;
    }
  }

  .text {
    text-align: center;
    font-size: 25px;
    font-family: "IRANSansB";
    background: linear-gradient(
      90deg,
      #ffd33d,
      #ea4aaa 17%,
      #b34bff 34%,
      #01feff 51%,
      #ffd33d 68%,
      #ea4aaa 85%,
      #b34bff
    );
    border-radius: 25px;
    animation: progress-animation 3s linear infinite;
    background-size: 300% 100%;
  }

  & form {
    padding: 30px 0 0 0;
  }
  & form {
    .form-row {
      display: flex;
      margin: 32px 0;
    }
  }

  form {
    .form-row {
      .input-data {
        width: 100%;
        height: 40px;
        margin: 0 20px;
        position: relative;
      }
    }
  }

  form {
    .form-row {
      .textarea {
        height: 70px;
      }
    }
  }
  .input-data {
    input {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      font-size: 17px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    }
  }
  .textarea {
    textarea {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      font-size: 17px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    }
  }

  .input-data input:focus,
  .textarea textarea:focus,
  .input-data input:valid,
  .textarea textarea:valid {
    outline: none;
  }

  .input-data input:focus ~ label,
  .textarea textarea:focus ~ label,
  .input-data input:valid ~ label,
  .textarea textarea:valid ~ label {
    transform: translateY(-20px);
    font-size: 14px;
    color: #3498db;
    outline: none;
  }

  .textarea textarea {
    resize: none;
    padding-top: 10px;
  }
  .input-data label {
    font-family: "IRANSansB";
    position: absolute;
    pointer-events: none;
    bottom: 10px;
    font-size: 16px;
    transition: all 0.3s ease;
  }

  .input-data {
    input {
      font-family: "IRANSans";
    }
  }

  .form-row {
    textarea {
      font-family: "IRANSans";
    }
  }

  .textarea label {
    font-family: "IRANSansB";
    width: 100%;
    bottom: 40px;
    background: #fff;
  }
  .input-data .underline {
    position: absolute;
    bottom: -1px;
    height: 2px;
    width: 100%;
  }
  .input-data .underline:before {
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    background: #3498db;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }
  .input-data input:focus ~ .underline:before,
  .input-data input:valid ~ .underline:before,
  .textarea textarea:focus ~ .underline:before,
  .textarea textarea:valid ~ .underline:before {
    transform: scale(1);
  }
  .submit-btn .input-data {
    overflow: hidden;
    height: 40px !important;
    width: 25% !important;
  }

  .submit-btn .input-data:hover .inner {
    left: 0;
  }
  .submit-btn .input-data input {
    font-family: "IRANSansB";
    background: none;
    border: none;
    color: #fff;
    font-size: 17px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative;
    z-index: 2;
  }
  @media (max-width: 700px) {
    & .text {
      font-size: 20px;
    }
    & form {
      padding: 10px 0 0 0;
    }
    & form .form-row {
      display: block;
    }
    form .form-row .input-data {
      margin: 35px 0 !important;
    }
    .submit-btn .input-data {
      width: 40% !important;
    }
  }
  @keyframes progress-animation {
    0% {
      background-position: 0;
    }
    100% {
      background-position: 100%;
    }
  }
`;

export { ContactUsContainer };
