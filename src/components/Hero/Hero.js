import React, { useState } from 'react';
import {
  Section,
  SectionText,
  SectionTitle,
  SectionSubtitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Modal from './Modal';

function Hero(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Section row nopadding id="about">
      <LeftSection>
        <SectionTitle main center>
          William Sanchez
        </SectionTitle>
        <SectionSubtitle>Full Stack Developer</SectionSubtitle>
        <SectionText>
          Passionate and Highly Motivated Developer with an insatiable hunger
          for knowledge. With the digital world expanding faster than ever
          before, and the new possibilities for the next phase of Web
          Development seeming boundless, I'm grateful for the opportunity to
          build a small piece of our future.
        </SectionText>
        <Button onClick={() => setShowModal(true)}>Contact Me</Button>
        <a
          id="downloadResume"
          href="src\assets\WilliamSanchezResume.pdf"
          className="button home__button"
          download=""
        >
          Download Resume
        </a>
        <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
      </LeftSection>
    </Section>
  );
}

export default Hero;
