import styled from "styled-components";

const CommentCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .comment-image-container {
    background-color: white;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }

  img {
    width: 120px;
    height: 120px;
    border: 3px solid black;
    border-radius: 50%;
  }

  @media (max-width: 700px) {
    p {
      font-size: 14px;
      padding: 0px -30px;
    }
  }

  @media (max-width: 400px) {
    p {
      font-size: 12px;
      padding: 0px;
    }
  }

  p {
    margin-top: 30px;
    padding: 10px 120px;
    font-family: "IRANSansB";
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 50px;
    font-family: "IRANSansB";
    
  }
`;

export { CommentCardContainer };