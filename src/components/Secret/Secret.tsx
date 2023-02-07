import React, { ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_FILM } from '@src/graphQL/mutations/film';

const Secret = () => {
  const [createFilm] = useMutation(CREATE_FILM);
  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const image = event.target.files[0];
    createFilm({
      variables: {
        input: {
          name: 'Человек-паук: Нет пути домой (2021)',
          description: 'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности - артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту – судьба Земли никогда ещё не была столь неопределённой.',
          country: 'США',
          director: 'Джон Уоттс',
          duration: '148 мин. / 02:28',
          release: '13 декабря 2021',
          genres: ['63dba55715fa0561b8b8fc6e', '63db9d3b69342432f6271cd8', '63dbbf8669342432f6271cdb'],
          image,
        },
      },
    }).then(() => {
      console.log('Good!');
    });
  };

  return (
    <div className="section">
      <input type="file" onChange={onFileChange} />
    </div>
  );
};

export default Secret;
