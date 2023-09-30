import { useContext } from 'react'
import { useStays } from '../../hooks/useStays'
import { Grid } from '../Grid/Grid'
import * as S from './styles'
import { FiltersContext } from '../../context/filtersContext'
import { NotFound } from '../NotFound/NotFound'

export const Main = () => {
  const { stays } = useStays()
  const { filters } = useContext(FiltersContext)

  const filteredStays = stays
    .filter(stay => stay.maxGuests >= (filters.adultGuests + filters.childrenGuests))
    .filter(stay => stay.city.toLowerCase().indexOf(filters.location.toLowerCase()) !== -1)
  return (
    <S.Main>
      <div className='title-box'>
        <h1>Stays in Finland</h1>
        <p>{filteredStays.length} stays</p>
      </div>
      {
        filteredStays.length === 0
          ? (
            <NotFound />
            )
          : (
            <Grid filteredStays={filteredStays} />
            )
      }
    </S.Main>
  )
}
