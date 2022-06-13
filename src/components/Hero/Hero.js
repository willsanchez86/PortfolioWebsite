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

// const Hero = (props) => (
//   <Section row nopadding id="about">
//     <LeftSection>
//       <SectionTitle main center>
//         William Sanchez
//       </SectionTitle>
//       <SectionSubtitle>Full Stack Developer</SectionSubtitle>
//       <SectionText>
//         Highly Motivated, Fast Learner with an insatiable hunger for knowledge.
//         With the digital world expanding faster than ever before, and the new
//         possibilities for the next phase of Web Development seeming boundless,
//         I'm grateful for the opportunity to build a small piece of our future.
//       </SectionText>
//       {/* TODO: Add Link to Email*/}
//       {/* <Button onClick={toggleModal}>Contact Me</Button> */}
//       <Modal />
//     </LeftSection>
//   </Section>
// );

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
        {/* TODO: Add Link to Email*/}
        <Button onClick={() => setShowModal(true)}>Contact Me</Button>
        <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
      </LeftSection>
    </Section>
  );

  // return (
  //   <div>
  //     <button onClick={() => setShowModal(true)}>Open Modal</button>
  //     <Modal onClose={() => setShowModal(false)} show={showModal}>
  //       Hello from the modal!
  //     </Modal>
  //   </div>
  // );
}

export default Hero;
