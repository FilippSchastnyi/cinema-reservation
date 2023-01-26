import MovieCard from '../MovieCard/MovieCard';
import MoviesContainerStyles from './MoviesContainer.module.scss';

const MoviesContainer = () => {
  const moviesMockData = [
    {
      id: '1',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
      name: 'Avatar',
      genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    },
    {
      id: '2',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
      name: 'Avatar: The Way of Water',
      genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    },
    {
      id: '3',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
      name: 'Avatar: The Way of Water 2',
      genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    },
    {
      id: '4',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
      name: 'Avatar: The Way of Water 3',
      genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    },
    {
      id: '5',
      image:
        'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_.jpg',
      name: 'Avatar: The Way of Water 4',
      genres: ['Action', 'Adventure', 'Fantasy', 'Sci-Fi'],
    },
  ];

  return (
    <section className="container">
      <div className={MoviesContainerStyles.Container}>
        {moviesMockData.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
};

export default MoviesContainer;
