import { useState } from 'react'

export const useCounter = (initialState) => {
  const [counter, setCounter] = useState(initialState)

  function plusCounter () {
    setCounter(counter + 1)
  }

  function minusCounter () {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return { counter, plusCounter, minusCounter }
}
