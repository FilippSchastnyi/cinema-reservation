import React, { ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_FILM } from '@src/graphQL/mutations/film'
import {CREATE_GOODS} from "@src/graphQL/mutations/store"
import InlineSVG from "react-inlinesvg"
import Logo from "../../assets/cola.svg"

const Secret = () => {
  const [createFilm] = useMutation(CREATE_FILM)
  const [addGoods] = useMutation(CREATE_GOODS)

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const image = event.target.files[0]
    createFilm({
      variables: {
        input: {
          name: 'Человек-паук: Нет пути домой (2021)',
          description:
            'Пока Мстители и их союзники продолжают защищать мир от различных опасностей, с которыми не смог бы справиться один супергерой, новая угроза возникает из космоса: Танос. Межгалактический тиран преследует цель собрать все шесть Камней Бесконечности - артефакты невероятной силы, с помощью которых можно менять реальность по своему желанию. Всё, с чем Мстители сталкивались ранее, вело к этому моменту – судьба Земли никогда ещё не была столь неопределённой.',
          country: 'США',
          director: 'Джон Уоттс',
          duration: '148 мин. / 02:28',
          release: '13 декабря 2021',
          genres: [
            '63dba55715fa0561b8b8fc6e',
            '63db9d3b69342432f6271cd8',
            '63dbbf8669342432f6271cdb',
          ],
          image,
        },
      },
    }).then(() => {
      console.log('Good!')
    })
  }

  const onGoodsFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return
    const image = event.target.files[0]
    addGoods({
      variables: {
        input: {
          storeId: "63f7476f3301469f937058f8",
          name: 'Cokesss',
          price: 4.7,
          image,
        },
      },
    }).then((data) => {
      console.log(data)
    })
  }

  return (
    <div className="section">
      CREATE MOVIE
      <input type="file" onChange={onFileChange} />
      CREATE GOODS
      <input type="file" onChange={onGoodsFileChange} />
      <InlineSVG src="http://localhost:5000/img/goods/popcorn.svg" width={200}/>
    </div>
  )
}

export default Secret
