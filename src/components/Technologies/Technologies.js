import React from 'react';
import {
  DiReact,
  DiPython,
  DiHtml5,
  DiCss3,
  DiSqllite,
  DiPostgresql,
  DiBootstrap,
  DiNodejsSmall,
} from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  IconList,
  ListIcon,
  Img,
} from './TechnologiesStyles';
import { SiFlask, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { siSelenium, SiSolidity, SiEthereum } from 'simple-icons/icons';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in both Web2 and Web3 Development
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js, Html5, CSS3, JavaScript, Bootstrap, TailwindCSS
          </ListParagraph>
          <IconList>
            <DiReact size="2.5rem" style={{ marginRight: '8px' }} />
            <DiHtml5 size="2.5rem" style={{ marginRight: '8px' }} />
            <DiCss3 size="2.5rem" style={{ marginRight: '8px' }} />
            <SiJavascript size="2.5rem" style={{ marginRight: '8px' }} />
            <DiBootstrap size="2.5rem" style={{ marginRight: '8px' }} />
            <SiTailwindcss size="2.5rem" style={{ marginRight: '8px' }} />
          </IconList>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Python, Flask, NodeJS, and Databases
          </ListParagraph>
          <IconList>
            <DiPython size="2.5rem" style={{ marginRight: '8px' }} />
            <DiSqllite size="2.5rem" style={{ marginRight: '8px' }} />
            <DiPostgresql size="2.5rem" style={{ marginRight: '8px' }} />
            <SiFlask size="2.5rem" style={{ marginRight: '8px' }} />
            <DiNodejsSmall size="2.5rem" style={{ marginRight: '8px' }} />
          </IconList>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Web3</ListTitle>
          <ListParagraph>
            Experience with <br />
            Solidity, Ethereum Network, Web3.js
          </ListParagraph>
          <IconList>
            <svg
              style={{
                fill: 'white',
                height: '2.5rem',
                marginTop: '10px',
                marginRight: '8px',
              }}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Solidity</title>
              <path d="M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z" />
            </svg>
            <svg
              style={{
                fill: 'white',
                height: '2.5rem',
                marginTop: '10px',
                marginRight: '8px',
              }}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Ethereum</title>
              <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
            </svg>
            <svg
              style={{
                fill: 'white',
                height: '2.5rem',
                marginTop: '10px',
                marginRight: '8px',
              }}
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Web3.js</title>
              <path d="M.889.775S0 1.29 0 2.315V7.44s0 3.079 2.666 4.618c.817.472 1.384.508 1.777.334.394.628.96 1.246 1.778 1.718 2.666 1.54 2.668-1.539 2.668-1.539V7.447c0-1.027.888-1.539.888-1.539l3.557-2.054s.89-.514 1.777 0c.89.513 0 1.027 0 1.027L11.56 6.934l1.775 1.025 3.559-2.055c.052-.03.912-.495 1.773.002.89.514 0 1.026 0 1.026l-3.555 2.054s-.888.514-.888 1.54v5.124s0 1.028-.889.514c-.89-.513-.89-1.539-.89-1.539l-1.778-1.027s.001 3.08 2.668 4.619c2.667 1.539 2.666-1.54 2.666-1.54v-5.126c0-1.026.889-1.537.889-1.537l4.445-2.569s1.776-1.025-.889-2.564c-.819-.474-1.552-.704-2.177-.797-.164-.357-.565-.776-1.377-1.24-2.667-1.523-5.332-.016-5.332-.016L8.004 4.881s-.89.514-.89 1.539v5.125s0 1.027-.89.514c-.889-.514-.89-1.54-.89-1.54V5.396c0-.064.003-.127.01-.188.097-.902.879-1.353.879-1.353L4.445 2.828l-.004.002c-.052.03-.884.544-.884 1.537v5.125s-.002 1.027-.891.514c-.89-.514-.889-1.54-.889-1.54V3.343c0-1.026.889-1.54.889-1.54L.889.776zm9.78 8.735v2.053l1.778 1.025v-2.053L10.67 9.51zm8.442 2.183c-.666.005-1.332.389-1.332 1.909 0 3.039 2.666 4.619 2.666 4.619l.889.513s.89.514.89 1.54-.89.513-.89.513l-3.555-2.053v2.053l3.555 2.053S24 24.379 24 21.3c0-3.077-1.777-4.105-1.777-4.105l-1.778-1.025s-.888-.514-.888-1.54c0-1.028.888-.515.888-.515L24 16.168v-2.053l-3.555-2.05s-.667-.376-1.334-.372Z" />
            </svg>
          </IconList>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
