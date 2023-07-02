import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

const CarouselElement = () => {
  const images = [0, 1, 2, 3].map((number) => ({
    src: `/src/images/HomeCarousel/${number}.jpeg`,
  }));

  const leftArrow = <i className="bi bi-arrow-left ms-2" />;
  const rightArrow = <i className="bi bi-arrow-right me-2" />;
  const maximizeIcon = <i className="bi bi-fullscreen" />;
  return (
    <Carousel
      images={images}
      leftIcon={leftArrow}
      rightIcon={rightArrow}
      maxIcon={maximizeIcon}
      hasSizeButton={false}
      hasMediaButton={false}
      hasIndexBoard={false}
      className="vh-100"
    />
  );
};

export default CarouselElement;
