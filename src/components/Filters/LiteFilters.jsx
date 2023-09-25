import { IconSearch } from '@tabler/icons-react'
import * as S from './styles'
import { useContext } from 'react'
import { FiltersContext } from '../../context/contextFilter'

export const LiteFilters = ({ onClick }) => {
  const { filters } = useContext(FiltersContext)
  return (
    <S.LiteFiltersBox onClick={onClick}>

      <S.Input type='text' placeholder='Search city' value={filters.location} readOnly />
      <S.VerticalDivider />

      <S.Input type='text' placeholder='Add guests' value={(filters.adultGuests + filters.childrenGuests) !== 0 ? (filters.adultGuests + filters.childrenGuests).toString() + ' guests' : ''} readOnly />
      <S.VerticalDivider />

      <S.Search><IconSearch /></S.Search>
    </S.LiteFiltersBox>
  )
}
