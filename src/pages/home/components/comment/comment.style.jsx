import styled from "styled-components";

const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .comment-title {
    font-family: "IRANSansB";

    h1 {
      color: ${(props) => props.theme.text.color1};
      transition: color 0.7s ease;
    }

    span {
      background-color: ${(props) => props.theme.bg.properyCard};
      transition: background 0.7s ease;
      border-radius: 3px;
      padding: 3px 15px;
      color: ${(props) => props.theme.text.spanColor};
      transition: color 0.7s ease;
    }
  }

  .comment-slider {
    margin-top: 50px;
    width: 100%;
    height: 100%;
    background-color: #fd7014;
  }
`;

export { CommentContainer };
