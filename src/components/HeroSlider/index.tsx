import { useCallback, useEffect, useState } from 'react';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import {
  Container,
  SlideContainer,
  Slide,
  Title,
  Subtitle,
  Button,
  BackgroundImage,
  InfoContainer,
  Info,
  MediaContainer,
  Controls,
  ControlSlidePrevious,
  ControlSlideNext,
  ControlNavSliderContainer,
  ControlNavSliderItem,
} from './styles';

const HeroSlider = () => {
  const slideContent = [
    {
      title: 'Realize your full potential',
      Subtitle: 'We help our clients make realize their most important goals',
      buttonText: 'Saiba mais',
      buttonLink: '#about',
      image: '/images/slide02.jpg',
    },
    {
      title: 'Create your full happy',
      Subtitle: 'We help our clients make realize their most important goals',
      buttonText: 'Saiba mais',
      buttonLink: '#about',
      image: '/images/slide04.jpg',
    },
    {
      title: 'Create your full happy',
      Subtitle: 'We help our clients make realize their most important goals',
      buttonText: 'Saiba mais',
      buttonLink: '#about',
      image: '/images/slide03.jpg',
    },
  ];

  const [isActive, setIsActive] = useState([]);

  const handleMountActiveSchema = useCallback((slideIndex: number) => {
    const mountedActiveSchema = slideContent.map((slide, index) => {
      return index === slideIndex;
    });
    setIsActive(mountedActiveSchema);
  }, []);

  const handleSlideNext = useCallback(
    (currentSlideIndex) => {
      if (currentSlideIndex === slideContent.length - 1) {
        handleMountActiveSchema(0);
        return;
      }

      const mountedActiveSchema = slideContent.map((slide, index) => {
        return index === currentSlideIndex + 1;
      });

      console.log(`isActive: ${isActive}`);
      setIsActive(mountedActiveSchema);
    },
    [slideContent, handleMountActiveSchema, isActive],
  );

  const handleSlidePrevious = useCallback(
    (currentSlideIndex) => {
      if (currentSlideIndex === 0) {
        handleMountActiveSchema(slideContent.length - 1);
        return;
      }

      const mountedActiveSchema = slideContent.map((slide, index) => {
        return index === currentSlideIndex - 1;
      });

      setIsActive(mountedActiveSchema);
    },
    [slideContent, handleMountActiveSchema],
  );

  useEffect(() => {
    handleMountActiveSchema(0);
  }, []);

  return (
    <Container>
      {slideContent.map((slide, index) => (
        <SlideContainer isActive={isActive[index]} key={slide.title}>
          <Controls>
            <ControlSlidePrevious onClick={() => handleSlidePrevious(index)}>
              <FiArrowLeftCircle size={54} />
            </ControlSlidePrevious>

            <ControlNavSliderContainer>
              {slideContent.map((slideNav, indexNav) => (
                <ControlNavSliderItem
                  isActive={isActive[indexNav]}
                  onClick={() => handleMountActiveSchema(indexNav)}
                />
              ))}
            </ControlNavSliderContainer>

            <ControlSlideNext onClick={() => handleSlideNext(index)}>
              <FiArrowRightCircle size={54} />
            </ControlSlideNext>
          </Controls>
          <Slide>
            <InfoContainer>
              <Info>
                <Title>{slide.title}</Title>
                <Subtitle>{slide.Subtitle}</Subtitle>
                <Button>{slide.buttonText}</Button>
              </Info>
            </InfoContainer>
            <MediaContainer />
          </Slide>
          <BackgroundImage src={slide.image} unsized />
        </SlideContainer>
      ))}
    </Container>
  );
};

export default HeroSlider;
