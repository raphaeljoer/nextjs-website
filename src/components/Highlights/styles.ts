import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  width: 100%;
  height: 100%;
`;

export const HighlightsContent = styled.div`
  padding: 0 2rem;

  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'item01 item02 item03'
    'item04 item05 item06';

  width: 100%;
  max-width: 1200px;

  background: white;

  .item01 {
    grid-area: item01;
  }

  .item02 {
    grid-area: item02;
  }

  .item03 {
    color: #fff;
    grid-area: item03;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
    border-radius: 0.5rem;
    background-image: linear-gradient(to bottom left, #6852ed, #ba43fc);
  }

  .item04 {
    grid-area: item04;
  }

  .item05 {
    grid-area: item05;
  }

  .item06 {
    grid-area: item06;
  }

  /* Tablet */
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'item01 item02'
      'item03 item04'
      'item05 item06';
  }
  /* Mobile */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      'item01'
      'item02'
      'item03'
      'item04'
      'item05';
  }
`;

export const HighlightItem = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 25vh;
  padding: 2rem;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0.5rem;
  background: white;

  h2 {
    margin-top: 1rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
  }
`;

export const HighlightButton = styled.a`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  text-decoration: none;
  color: #fff;

  svg {
    margin-left: 1rem;
  }
`;
