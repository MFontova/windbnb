import { useContext } from 'react'
import { useCounter } from '../../hooks/useCounter'
import * as S from './styles'
import { FiltersContext } from '../../context/filtersContext'

export const ChildrenCounter = () => {
  const { filters, setFilters } = useContext(FiltersContext)
  const { counter, plusCounter, minusCounter } = useCounter(filters.childrenGuests)

  const minusCounterHandler = () => {
    minusCounter()
    setFilters(filters => ({
      ...filters,
      childrenGuests: counter - 1 >= 0 ? counter - 1 : 0
    }))
  }

  const plusCounterHandler = () => {
    plusCounter()
    setFilters(filters => ({
      ...filters,
      childrenGuests: counter + 1
    }))
  }

  return (
    <S.GuestsCounterBox>
      <S.CounterTitle>
        Children
        <S.CounterDescription>Ages 2 - 12</S.CounterDescription>
      </S.CounterTitle>
      <S.GuestsCounter>
        <button onClick={minusCounterHandler}>-</button>
        <p>{counter}</p>
        <button onClick={plusCounterHandler}>+</button>
      </S.GuestsCounter>
    </S.GuestsCounterBox>
  )
}
