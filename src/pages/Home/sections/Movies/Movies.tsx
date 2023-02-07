import MoviesToShow from '@components/MoviesToShow/MoviesToShow';
import MoviesHeaderSelection from '@components/MoviesHeaderSelection/MoviesHeaderSelection';

const Movies = () => (
  <section className="section">
    <div className="container">
      <h2 className="title">Movies</h2>
      <MoviesHeaderSelection />
      <MoviesToShow />
    </div>
  </section>
);

export default Movies;
