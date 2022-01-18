import styled from "styled-components";

const UserInfoContainer = styled.div`
  margin: 100px auto 0 auto;
  max-width: 80%;
  width: 100%;
  background-color: #fff;
  padding: 25px 30px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  font-family: "IRANSansB";

  .title {
    font-size: 25px;
    font-weight: 500;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 30px;
      border-radius: 5px;
      background: linear-gradient(135deg, #71b7e6, #9b59b6);
    }
  }

  .content {
    form {
      .user-details {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 20px 0 12px 0;
      }
    }
  }

  form .user-details .input-box {
    margin-bottom: 15px;
    width: calc(100% / 2 - 20px);
  }
  form .input-box span.details {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
  }
  .user-details .input-box input {
    height: 45px;
    width: 100%;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding-left: 15px;
    padding-right: 10px;
    font-family: "IRANSans";
    border: 1px solid #ccc;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
  }
  .user-details .input-box input:focus,
  .user-details .input-box input:valid {
    border-color: ${(props) => props.theme.bg.properyCard};
  }

  form .property-details {
    margin-top: 30px;
  }

  form .property-details .property-title {
    font-size: 20px;
    font-weight: 500;
  }
  form .category {
    display: flex;
    width: 80%;
    margin: 14px 0;
    justify-content: space-between;
    margin-top: 50px;

    .property {
      margin-right: 15px;
    }
  }
  form .category label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  form .category label .dot {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 10px;
    background: #d9d9d9;
    border: 5px solid transparent;
    transition: all 0.3s ease;
  }
  #dot-1:checked ~ .category label .one,
  #dot-2:checked ~ .category label .two,
  #dot-3:checked ~ .category label .three {
    background: ${(props) => props.theme.bg.properyCard};
    border-color: #d9d9d9;
  }
  form input[type="radio"] {
    display: none;
  }
  form .button {
    margin: 50px 0;
  }
  form .button button {
    height: 100%;
    width: 100%;
    padding: 10px 0;
    font-family: "IRANSansB";
    color: ${(props) => props.theme.bg.properyCard};
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: white;
    border: 2px solid ${(props) => props.theme.bg.properyCard};
    border-radius: 5px;
  }
  form .button button:hover {
    color: #f5f5f5;
    background-color: ${(props) => props.theme.bg.properyCard};
  }
  @media (max-width: 584px) {
    .container {
      max-width: 100%;
    }
    form .user-details .input-box {
      margin-bottom: 15px;
      width: 100%;
    }
    form .category {
      width: 100%;
    }
    .content form .user-details {
      max-height: 300px;
      overflow-y: scroll;
    }
    .user-details::-webkit-scrollbar {
      width: 5px;
    }
  }
  @media (max-width: 459px) {
    .container .content .category {
      flex-direction: column;
    }
  }
`;

export { UserInfoContainer };
