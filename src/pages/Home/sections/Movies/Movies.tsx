import MoviesToShow from '@components/MoviesToShow/MoviesToShow';
import MoviesHeaderSelection from '@components/MoviesHeaderSelection/MoviesHeaderSelection';
import Section from '@components/Section/Section';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { CinemaVariant } from '@src/ts/enums';
import { CinemaOptionType, FilmCardType } from '@src/ts/types';
import { useQuery } from '@apollo/client';
import { GET_FILM_CARDS_INFO } from '@src/graphQL/query/film';
import { GET_ALL_CINEMAS } from '@src/graphQL/query/cinema';

const Movies = () => {
  const [cinema, setCinema] = useState<CinemaOptionType>(
    { value: CinemaVariant.GOLDEN_SCREEN, label: 'GOLDEN_CINEMA' },
  );
  const [itemOffset, setItemOffset] = useState(0);
  const { loading: cinemaLoading, error: cinemaError, data: cinemaData } = useQuery(GET_ALL_CINEMAS);
  const { loading, error, data } = useQuery(GET_FILM_CARDS_INFO, {
    variables: {
      input: {
        name: cinema.value,
      },
    },
  });

  if (loading || cinemaLoading) return (<p>loading...</p>);
  if (error || cinemaError) {
    console.log(error);
    return null;
  }
  if (!data || !cinemaData) return null;
  const { cinemaList }:{ cinemaList:Array<any> } = cinemaData;
  const { cardInfoList } : { cardInfoList: Array<FilmCardType> } = data;

  const itemsPerPage = 2;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = cardInfoList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(cardInfoList.length / itemsPerPage);

  const onHandlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % cardInfoList.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  console.log(cinemaList);

  return (
    <Section hasContainer>
      <>
        <h2 className="title">Movies</h2>
        <MoviesHeaderSelection
          defaultCinema={cinema}
          changeCinema={setCinema}
          cinemaList={cinemaList}
        />
        <MoviesToShow cardInfo={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={onHandlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />

      </>
    </Section>

  );
};
export default Movies;
