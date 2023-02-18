import Hero from '@pages/Home/sections/Hero/Hero'
import Marquee from '@components/Marquee/Marquee'
import Movies from '@pages/Home/sections/Movies/Movies'
import Cinemas from '@pages/Home/sections/Cinemas/Cinemas'

const Home = (): JSX.Element => (
  <>
    <Hero />
    <Marquee />
    <Movies />
    <Cinemas />
  </>
)

export default Home
