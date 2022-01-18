import styled from "styled-components";

const CommentSliderContainer = styled.div`
  width: 100%;
  height: 100%;
  /* padding: 10px; */

  .comment-swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    height: 100%;
    text-align: center;
    margin-top: 20px;
    background-color: #fd7014;
  }

  .swiper-button-next {
    background-color: #f5f5f5;
    box-shadow: 1.5px 0 4px 0 rgb(0 0 0 / 15%);
    padding: 20px 15px;
    left: -8px;
    color: black;
    font-size: 20px;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;

    &:after {
      font-size: 28px;
      font-weight: 700;
    }
  }

  .swiper-button-prev {
    background-color: #f5f5f5;
    box-shadow: -1.5px 0 4px 0 rgb(0 0 0 / 15%);
    padding: 20px 12px;
    right: 0px;
    color: black;
    font-size: 20px;
    border-bottom-left-radius: 7px;
    border-top-left-radius: 7px;

    &:after {
      font-size: 28px;
      font-weight: 700;
    }
  }

  @media (max-width: 700px) {
    .swiper-button-next {
      display: none;
    }
    .swiper-button-prev {
      display: none;
    }
  }
`;

export { CommentSliderContainer };
