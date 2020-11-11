import Link from 'next/link';
import Image from 'next/image';
import {
  Container,
  CallToAction,
  CallToActionContainer,
  Illustration,
  HeroContent,
  Button,
  Subtitle,
} from './styles';

interface IHeroProps {
  title: string;
  subTitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  imagePosition?: 'left' | 'right';
  aLotText?: boolean;
}

const Hero = ({
  title,
  subTitle,
  buttonText,
  buttonLink,
  image,
  imagePosition,
  aLotText = false,
}: IHeroProps) => {
  return (
    <Container>
      <HeroContent imagePosition={imagePosition}>
        <CallToActionContainer>
          <CallToAction>
            {aLotText ? <h2>{title}</h2> : <h1>{title}</h1>}
            <Subtitle alotText={aLotText}>{subTitle}</Subtitle>
            <Link href={buttonLink} passHref>
              <Button>{buttonText}</Button>
            </Link>
          </CallToAction>
        </CallToActionContainer>
        <Illustration>
          <Image src={image} height={550} width={600} priority />
        </Illustration>
      </HeroContent>
    </Container>
  );
};

export default Hero;
