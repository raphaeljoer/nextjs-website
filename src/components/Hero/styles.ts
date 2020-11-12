import styled, { css } from 'styled-components';

interface IHeroProps {
  imagePosition?: 'left' | 'right';
  alotText?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin-top: 4rem;

  @media screen and (max-width: 1000px) {
    margin-top: 0;
  }
`;

export const HeroContent = styled.div<IHeroProps>`
  display: grid;

  max-width: 1200px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 60vh;
  grid-template-areas: 'calltoaction' 'media';

  ${(props) =>
    props.imagePosition === 'left' &&
    css`
      flex-direction: row-reverse;
    `}

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      'calltoaction'
      'media';
    padding: 2rem;
  }
`;

export const CallToActionContainer = styled.div`
  grid-area: 'calltoaction';

  display: flex;
  justify-content: start;

  width: 100%;
`;

export const CallToAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 75%;

  padding: 0 2rem;

  h1 {
    font-size: 3rem;
    line-height: 4rem;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  @media screen and (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 2rem;
    width: 100%;
    height: auto;

    h1 {
      text-align: center;
    }

    h2 {
      text-align: center;
    }
  }
`;

export const TitleH1 = styled.h1``;

export const Subtitle = styled.p<IHeroProps>`
  margin-top: 1.6rem;
  font-size: 1.2rem;

  ${(props) =>
    props.alotText &&
    css`
      font-size: 1rem;
    `}

  @media screen and (max-width: 1000px) {
    text-align: center;
    max-width: 25rem;
  }
`;

export const Illustration = styled.div`
  grid-area: 'media';

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2rem;
  padding: 0 2rem;
  border-radius: 5rem;

  text-decoration: none;

  width: fit-content;
  height: 3rem;

  color: white;
  background-image: linear-gradient(to bottom left, #6852ed, #ba43fc);
`;
