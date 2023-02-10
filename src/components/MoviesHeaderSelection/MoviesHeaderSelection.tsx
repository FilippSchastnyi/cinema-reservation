import Select from 'react-select';
import { CinemaOptionType } from '@src/ts/types';
import MoviesHeaderSelectionCss from './MoviesHeaderSelection.scss';

const MoviesHeaderSelection = ({
  changeCinema,
  cinemaList,
  defaultCinema,
}: {
  defaultCinema: any,
  changeCinema: (option: CinemaOptionType)=> void,
  cinemaList: Array<any>
}) => {
  const options = cinemaList.map((cinema) => {
    return { value: cinema.name, label: cinema.name };
  });

  console.log(options);

  return (
    <div>
      <Select
        defaultValue={defaultCinema}
        options={options}
        onChange={(option) => changeCinema(option as CinemaOptionType)}
      />
    </div>
  );
};

export default MoviesHeaderSelection;
