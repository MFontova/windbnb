import { useContext } from 'react'
import { useStays } from '../../hooks/useStays'
import { Card } from '../Card/Card'
import * as S from './styles'
import { FiltersContext } from '../../context/contextFilter'

export const Grid = () => {
  const { stays } = useStays()
  const { filters } = useContext(FiltersContext)
  return (
    <S.Grid>
      {
        stays
          .filter(stay => stay.maxGuests >= (filters.adultGuests + filters.childrenGuests))
          .filter(stay => stay.city.toLowerCase().indexOf(filters.location.toLowerCase()) !== -1)
          .map((stay, index) => {
            return <Card key={index} stay={stay} />
          })
      }
    </S.Grid>
  )
}
