import { useCallback, useState } from 'react';
import Slide from '@/components/Slider/components/Slide';

import { Container, SliderContent } from './styles';

interface ISlideContent {
  position: number;
  theme: string;
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

const Slider = () => {
  const contentList: ISlideContent[] = [
    {
      position: 0,
      theme: 'Novo estudo',
      title: 'Get the ultimate tool and learn how to grow your audience',
      description:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
      buttonText: 'Saiba mais',
      image: '/images/slide01.jpg',
    },
    {
      position: 1,
      theme: 'Novo estudo 2',
      title: 'Ultimate tool and learn how to grow your audience',
      description:
        'At vero eos et accusamus et iusto blanditiis praesentium voluptatum deleniti atque.',
      buttonText: 'Saiba mais',
      image: '/images/slide02.jpg',
    },
    {
      position: 2,
      theme: 'Novo estudo 3',
      title: 'Learn how to grow your audience and live a life happyness',
      description:
        'At vero eos et voluptatum deleniti atque iusto blanditiis praesentium voluptatum deleniti.',
      buttonText: 'Saiba mais',
      image: '/images/slide03.jpg',
    },
  ];

  const [slideContent, setSlideContent] = useState(contentList[0]);

  const setContent = useCallback(
    (position: number) => {
      switch (position) {
        case contentList.length:
          return setSlideContent(contentList[0]);
        case -1:
          return setSlideContent(contentList[contentList.length - 1]);
        default:
          return setSlideContent(contentList[position]);
      }
    },
    [contentList],
  );

  return (
    <Container id="about">
      <SliderContent>
        <Slide slideContent={slideContent} setContent={setContent} />
      </SliderContent>
    </Container>
  );
};

export default Slider;
