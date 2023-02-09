import MoviesToShow from '@components/MoviesToShow/MoviesToShow';
import MoviesHeaderSelection from '@components/MoviesHeaderSelection/MoviesHeaderSelection';
import Section from '@components/Section/Section';

const Movies = () => {
  return (
    <Section hasContainer>
      <>
        <h2 className="title">Movies</h2>
        <MoviesHeaderSelection />
        <MoviesToShow />
      </>
    </Section>

  );
};
export default Movies;
