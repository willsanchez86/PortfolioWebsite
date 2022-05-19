import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding id="about">
    <LeftSection>
      <SectionTitle main center>
        I'm Will <br />
        A Software Developer
      </SectionTitle>
      {/* TODO: FILL IN SECTIONTEXT */}
      <SectionText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, veniam quam laudantium repudiandae amet itaque sit voluptate quasi alias, cum suscipit est ad blanditiis, provident expedita ullam illum autem! Quo.
      </SectionText>
      {/* TODO: Add Link to Email*/}
      <Button onclick={() => window.location = 'https://google.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;