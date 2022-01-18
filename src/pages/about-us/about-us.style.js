import styled from "styled-components";

const AboutUsContainer = styled.div`
  width: 80%;
  background: #fff;
  padding: 40px 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 140px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  border-radius: 30px;
  border-left: 50px solid #3ceda7;
  border-right: 50px solid #3ceda7;

  .inner-width {
    overflow: hidden;
    padding: 0 20px;
    margin: auto;
    text-align: center;

    h1 {
      font-family: "IRANSansB";
    }
  }
  .about {
    margin-top: 60px;
    padding-right: 30px;

    p {
      text-align: center;
      font-family: "IRANSansB";
      text-align: justify;
      margin-bottom: 20px;
      color: #7e7c7a;
      font-size: 17px;
    }

    a {
      display: inline-block;
      color: #7e7c7a;
      text-decoration: none;
      border: 2px solid #3ceda7;
      border-radius: 24px;
      padding: 8px 40px;
      transition: 0.4s linear;

      &:hover {
        color: #fff;
        background: #3ceda7;
      }
    }
  }
  .border {
    width: 100px;
    height: 3px;
    background: #3ceda7;
    margin: 0 auto;
  }
  .about-section-row {
    display: flex;
    flex-wrap: wrap;
  }
  .about-section-col {
    flex: 50%;
  }

  .skills {
    padding-left: 30px;
    margin-right: 50px;
    margin-top: 50px;
  }
  .skill {
    margin-bottom: 10px;
  }
  .title {
    color: #7e7c7a;
    font-family: "IRANSansB";
  }
  .progress {
    width: 100%;
    height: 12px;
    background: #ddd;
    border-radius: 12px;
  }
  .progress-bar {
    height: 12px;
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
    border-radius: 12px;
    animation: progress-animation 3s linear infinite;
    background-size: 300% 100%;

    @keyframes progress-animation {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 100%;
      }
    }
  }
  .p1 {
    width: 90%;
  }
  .p2 {
    width: 70%;
  }
  .p3 {
    width: 50%;
  }
  .progress-bar span {
    float: right;
    margin-right: 6px;
    line-height: 13px;
    color: #fff;
    font-size: 12px;
  }
  @media screen and (max-width: 700px) {
    margin-bottom: 30px;
    border-left: 20px solid #3ceda7;
    border-right: 20px solid #3ceda7;
    .about-section-col {
      flex: 100%;
      margin: 10px 0;
    }
    .about,
    .skills {
      padding: 0;
      margin-right: 0;
    }
    .about {
      text-align: center;
    }
  }
`;

export { AboutUsContainer };