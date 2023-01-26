import Hero from '@pages/Home/sections/Hero/Hero';
import Marquee from '@components/Marquee/Marquee';
import MoviesContainer from '@src/components/MoviesContainer/MoviesContainer';

const Home = (): JSX.Element => (
  <>
    <Hero />
    <Marquee />
    <MoviesContainer />
  </>
);

export default Home;
