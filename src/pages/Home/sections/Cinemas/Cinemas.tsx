import Section from "@components/Section/Section"
import {useQuery} from "@apollo/client"
import {GET_ALL_CINEMAS} from "@src/graphQL/query/cinema"
import {GET_FILM_CARDS_INFO} from "@src/graphQL/query/film"

const Cinemas = () => {

  return (
    <Section hasContainer>
      <>
        <h2 className="title">
          Cinemas
        </h2>
        <ul className={CinemaCss.list}>

        </ul>
      </>
    </Section>
  )
}

export default Cinemas