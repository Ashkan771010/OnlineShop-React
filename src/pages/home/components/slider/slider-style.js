import styled from "styled-components";

const Container = styled.div`
    height: 500px;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 110px;

    @media(max-width: 750px) {
        width: 100%;
        height: 80%;
        margin-top: 70px;
    }
`

const SliderContainer = styled.div`
    width: 100%;
    height: 100%;

    @media(max-width: 750px) {
        width: 100%;
        height: 90%;
    }

    .slider {
        width: 100%;
        height: 100%;
        border-radius: 12px;

        @media(max-width: 750px) {
            border-radius: 0px;
    }
    }

    .slider img {
        width: 100%;
        height: 100%;
        border-radius: 12px;
        object-fit: cover;

        @media(max-width: 750px) {
            border-radius: 0px;
    }
    }

    .swiper-button-next, .swiper-button-prev {
        color: #f6f6f6;
    }

    .swiper-pagination-bullet {
        background-color: #000;
        opacity: .8;
    }

    .swiper-pagination-bullet-active {
        background-color: #f6f6f6;
    }
`;

export { SliderContainer, Container };