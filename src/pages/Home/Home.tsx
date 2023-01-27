import Hero from '@pages/Home/sections/Hero/Hero';
import Marquee from '@components/Marquee/Marquee';
import Movies from '@pages/Home/sections/Movies/Movies';

const Home = (): JSX.Element => (
  <>
    <Hero />
    <Marquee />
    <Movies />
  </>
);

export default Home;
