import { useContext } from 'react'
import { useStays } from '../../hooks/useStays'
import { Card } from '../Card/Card'
import * as S from './styles'
import { FiltersContext } from '../../context/filtersContext'
import { NotFound } from '../NotFound/NotFound'

export const Grid = () => {
  const { stays } = useStays()
  const { filters } = useContext(FiltersContext)

  const filteredStays = stays
    .filter(stay => stay.maxGuests >= (filters.adultGuests + filters.childrenGuests))
    .filter(stay => stay.city.toLowerCase().indexOf(filters.location.toLowerCase()) !== -1)

  return (
    filteredStays.length === 0
      ? (
        <NotFound />
        )
      : (
        <S.Grid>
          {
            filteredStays
              .map((stay, index) => {
                return <Card key={index} stay={stay} />
              })
          }
        </S.Grid>
        )
  )
}
