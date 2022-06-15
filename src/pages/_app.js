import Theme from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <meta
            property="og:title"
            content="Developer Portfolio - William Sanchez"
          />
          <meta
            property="og:description"
            content="William Sanchez Full Stack Developer Portfolio. Review Projects, Languages, Technologies. Contact me directly. "
          />
          <meta property="og:image" content="/images/Portfolio Image.PNG" />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
