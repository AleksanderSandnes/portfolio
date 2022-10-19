import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a software developer and a project manager who thrives in both collaborative and independent evironments. 
      </SectionText>
      <Button onClick={() => window.location = "https://www.nettking.no/"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;