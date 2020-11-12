import { useCallback, useState } from 'react';

import { Container } from '@/styles/pages/Home';
import SidebarModal from '@/components/SidebarModal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroSlider from '@/components/HeroSlider';
import Highlights from '@/components/Highlights';
import Slider from '@/components/Slider';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  return (
    <Container>
      <SidebarModal isOpen={modalOpen} setIsOpen={toggleModal} />
      <Navbar setIsOpen={toggleModal} />
      <HeroSlider />
      <Hero
        title="Realize your full potential"
        subTitle="We help our clients make realize their most important business goals."
        buttonText="Contact us"
        buttonLink="#about"
        image="/images/illustration01.svg"
      />
      <Highlights />
      <Slider />
      <Hero
        title="Get the ultimate tool and learn how to grow your audience"
        subTitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. Many desktop publishing packages and web."
        buttonText="Get started"
        buttonLink="https://google.com"
        image="/images/illustration02.svg"
        imagePosition="left"
        aLotText
      />
    </Container>
  );
}
