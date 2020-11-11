import styled from 'styled-components';
import Image from 'next/image';

export const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50vh;
  grid-template-areas: 'info media';

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50vh auto;
    grid-template-areas:
      'media'
      'info';
  }
`;

export const InfoContainer = styled.div`
  grid-area: info;

  display: flex;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  width: 80%;

  color: white;
  padding: 2.5rem;

  @media screen and (max-width: 1200px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Theme = styled.div`
  color: #c6bcff;
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.3rem;
  margin-top: 1rem;
`;

export const Description = styled.div`
  color: #c6bcff;
  font-size: 1.1rem;
  font-weight: 400;
  margin-top: 2rem;
`;

export const Button = styled.a`
  display: flex;
  flex-shrink: 0;

  margin-top: 2rem;
  color: #6852ed;

  align-items: center;
  justify-content: center;

  width: fit-content;
  height: auto;

  border-radius: 2rem;
  padding: 0.7rem 2rem;

  font-weight: 600;

  background: #02eaf0;

  cursor: pointer;
`;

export const ImageContainer = styled.div`
  grid-area: media;

  position: relative;

  background: black;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`;

export const ImageNext = styled(Image)`
  position: absolute;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  min-height: 100%;
  min-width: 100%;

  max-width: 100%;
  max-height: 100%;

  object-fit: cover;
`;

export const Controls = styled.div`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: absolute;
  width: 100%;
  height: 120px;
`;

export const ButtonArrow = styled.button`
  color: #fff;
  opacity: 0.5;
  background: none;
  display: flex;
  cursor: pointer;
`;
