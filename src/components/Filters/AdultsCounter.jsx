import { useContext } from 'react'
import { useCounter } from '../../hooks/useCounter'
import * as S from './styles'
import { FiltersContext } from '../../context/contextFilter'

export const AdultsCounter = () => {
  const { filters, setFilters } = useContext(FiltersContext)
  const { counter, plusCounter, minusCounter } = useCounter(filters.adultGuests)

  const minusCounterHandler = () => {
    minusCounter()
    setFilters(filters => ({
      ...filters,
      adultGuests: counter - 1 >= 0 ? counter - 1 : 0
    }))
  }

  const plusCounterHandler = () => {
    plusCounter()
    setFilters(filters => ({
      ...filters,
      adultGuests: counter + 1
    }))
  }

  return (
    <S.GuestsCounterBox>
      <S.CounterTitle>
        Adults
        <S.CounterDescription>Ages 13 or above</S.CounterDescription>
      </S.CounterTitle>
      <S.GuestsCounter>
        <button onClick={minusCounterHandler}>-</button>
        <p>{filters.adultGuests}</p>
        <button onClick={plusCounterHandler}>+</button>
      </S.GuestsCounter>
    </S.GuestsCounterBox>
  )
}
