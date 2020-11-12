import Image from 'next/image';
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';

import {
  SlideContent,
  Info,
  InfoContainer,
  ImageContainer,
  Theme,
  Title,
  Description,
  Button,
  Controls,
  ButtonArrow,
  ImageNext,
} from './styles';

interface ISlideContent {
  position: number;
  theme: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

interface ISlideContentObj {
  slideContent: ISlideContent;
  setContent: (position: number) => void;
}

const Slide = ({ slideContent, setContent }: ISlideContentObj) => {
  return (
    <SlideContent>
      <InfoContainer>
        <Info>
          <Theme>{slideContent.theme}</Theme>
          <Title>{slideContent.title}</Title>
          <Description>{slideContent.description}</Description>
          <Button>{slideContent.buttonText}</Button>
        </Info>
      </InfoContainer>
      <ImageContainer>
        <Controls>
          <ButtonArrow onClick={() => setContent(slideContent.position - 1)}>
            <FiArrowLeftCircle size={56} />
          </ButtonArrow>
          <ButtonArrow onClick={() => setContent(slideContent.position + 1)}>
            <FiArrowRightCircle size={56} />
          </ButtonArrow>
        </Controls>
        <ImageNext
          src={slideContent.image}
          key={slideContent.image}
          quality={40}
          unsized
        />
      </ImageContainer>
    </SlideContent>
  );
};

export default Slide;
