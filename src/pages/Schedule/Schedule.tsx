import Section from '@components/Section/Section'
import {useParams} from "react-router-dom"

const Schedule = () => {
  const params = useParams()
  console.log(params)

  return (
    <Section hasContainer>
      <span>
        Hi, Need work
      </span>
    </Section>
  )
}

export default Schedule
