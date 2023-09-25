import { useState } from 'react'

export const useFiltersSize = () => {
  const [fullFilters, setFullFilters] = useState(false)

  function switchFiltersSize () {
    setFullFilters(!fullFilters)
  }

  return { fullFilters, switchFiltersSize }
}
