import { Card } from '../Card/Card'
import * as S from './styles'

export const Grid = ({ filteredStays }) => {
  return (
    <S.Grid>
      {
        filteredStays
          .map((stay, index) => {
            return <Card key={index} stay={stay} />
          })
      }
    </S.Grid>
  )
}
