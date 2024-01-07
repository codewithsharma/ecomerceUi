import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg from "../assets/Image Placeholder.png";
import styled from "styled-components";
const ImageConatiner = styled.div``;
const CarouselContainer = styled(Slider)`
  max-width: 1120px;
  margin: auto;
`;
const HompageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <CarouselContainer {...settings}>
      <ImageConatiner>
        <img src={CarouselImg} alt="" />
      </ImageConatiner>
      <ImageConatiner>
        <img src={CarouselImg} alt="" />
      </ImageConatiner>
      <ImageConatiner>
        <img src={CarouselImg} alt="" />
      </ImageConatiner>
      <ImageConatiner>
        <img src={CarouselImg} alt="" />
      </ImageConatiner>
      {/* Add more slides as needed */}
    </CarouselContainer>
  );
};

export default HompageCarousel;
