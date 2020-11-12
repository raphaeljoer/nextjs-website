import styled, { css } from 'styled-components';

import Image from 'next/image';

interface ISlideProps {
  isActive: boolean;
}

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100%;
`;

export const SlideContainer = styled.div<ISlideProps>`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  position: absolute;
  opacity: 0;
  z-index: -1;

  ${(props) =>
    props.isActive
      ? css`
          animation: fadeIn 0.4s ease-in-out forwards;
          z-index: 1;
        `
      : css`
          animation: fadeOut 0.4s ease-in-out forwards;
          z-index: -1;
        `}

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const Slide = styled.div`
  display: grid;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100%;
  grid-template-areas: 'info' 'media';

  height: 100%;
  width: 1200px;
`;

export const InfoContainer = styled.div`
  z-index: 1;
  grid-area: info;

  display: flex;

  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  padding: 4rem 2rem;

  width: 100%;
  height: auto;

  border-radius: 20px;

  backdrop-filter: blur(30px);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 10px 0px 30px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 3.5rem;
`;

export const Subtitle = styled.div`
  font-size: 1.2rem;
  max-width: 80%;
  margin-top: 1.5rem;
`;

export const Button = styled.button`
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

export const MediaContainer = styled.div`
  grid-area: media;
`;

export const BackgroundImage = styled(Image)`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100px;
  width: auto;

  padding: 2rem;

  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px 20px 0 0;

  z-index: 999;
`;

export const ControlSlidePrevious = styled.button`
  color: white;
  background: none;
  opacity: 0.6;
`;

export const ControlSlideNext = styled.button`
  color: white;
  opacity: 0.6;
  background: none;
`;

export const ControlNavSliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 100%;

  min-width: 100px;
`;

export const ControlNavSliderItem = styled.button<ISlideProps>`
  margin: 0 0.4rem;

  height: 15px;
  width: 15px;

  border-radius: 50%;
  border: white solid 2px;

  ${(props) =>
    props.isActive
      ? css`
          background: black;
        `
      : css`
          background: transparent;
        `}
`;
