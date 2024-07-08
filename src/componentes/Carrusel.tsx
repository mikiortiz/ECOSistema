import React from 'react';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface Image {
  imgPath: string;
}

interface CarruselProps {
  images: Image[];
}

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(250, 250, 250, 0.2)',
        borderRadius: '50%',
        right: 10,
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <KeyboardArrowRight />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(250, 250, 250, 0.2)',
        borderRadius: '50%',
        left: 10,
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeft />
    </div>
  );
};

const Carrusel: React.FC<CarruselProps> = ({ images }) => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (index: number) => {
    setActiveStep(index);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current: number, next: number) => handleStepChange(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ maxWidth: 345, flexGrow: 1, position: 'relative', margin: '0 auto' }}>
      <Box
        sx={{
          position: 'relative',
          borderRadius: 3,
          overflow: 'hidden',
          width: '90%',
          margin: '0 auto',
        }}
      >
        <Slider {...settings}>
          {images.map((step, index) => (
            <div key={index}>
              <Box
                component="img"
                sx={{
                  height: 140,
                  display: 'block',
                  maxWidth: 345,
                  overflow: 'hidden',
                  width: '100%',
                  objectFit: 'cover',
                }}
                src={step.imgPath}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: 2,
        }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: activeStep === index ? '#4E169D' : 'grey.400',
              margin: '0 4px',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carrusel;
