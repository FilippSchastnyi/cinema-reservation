import React from 'react'
import MovieDetailsCss from '@components/MovieDetails/MovieDetails.module.scss'
import {BaseNameType} from "@src/ts/types"

type MovieDetailsItemProps = {
  name: string
  description: string | Array<BaseNameType>
}

const MovieDetailsItem = ({
  name,
  description,
}: MovieDetailsItemProps): JSX.Element | null => {

  if (!description) return null

  return (
    <div>
      <span className="text text--bold">{name}: </span>
      {Array.isArray(description) ? (
        description.map((item, index) => (
          <span key={item.id} className="text">
            {description.length !== index + 1 ? `${item.name  }, ` : item.name}
          </span>
        ))
      ) : (
        <span className="text">{description as string}</span>
      )}
    </div>
  )
}

export default MovieDetailsItem
