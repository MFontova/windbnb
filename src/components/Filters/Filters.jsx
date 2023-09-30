import { useFiltersSize } from '../../hooks/useFiltersSize'
import { FullFilters } from './FullFilters'
import { LiteFilters } from './LiteFilters'

export const Filters = () => {
  const { fullFilters, switchFiltersSize } = useFiltersSize()

  return (
    // fullFilters ? <p onClick={switchFiltersSize}>full</p> : <p onClick={switchFiltersSize}>lite</p>
    fullFilters ? <FullFilters onClick={switchFiltersSize} /> : <LiteFilters onClick={switchFiltersSize} />
  )
}
