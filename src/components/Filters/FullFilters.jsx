import { IconMapPinFilled, IconSearch, IconX } from '@tabler/icons-react'
import * as S from './styles'
import { useStays } from '../../hooks/useStays'
import { AdultsCounter } from './AdultsCounter'
import { ChildrenCounter } from './ChildrenCounter'
import { useContext, useState } from 'react'
import { FiltersContext } from '../../context/contextFilter'

export const FullFilters = ({ onClick: switchFiltersSize }) => {
  const { stays } = useStays()
  const { filters, setFilters } = useContext(FiltersContext)
  const [showLocation, setShowLocation] = useState(false)
  const [showGuestsSelectors, setShowGuestsSelectors] = useState(false)

  const uniqueCitiesMap = {}
  const uniqueData = stays.filter((stay) => {
    if (!uniqueCitiesMap[stay.city]) {
      uniqueCitiesMap[stay.city] = true
      return true
    }
    return false
  })

  const locationInputHandler = (e) => {
    setFilters(filters => ({
      ...filters,
      location: e.target.value
    }))
  }

  const suggestionHandler = (city) => {
    setFilters(filters => ({
      ...filters,
      location: city
    }))
  }

  const showLocationHelper = () => {
    setShowLocation(true)
    setShowGuestsSelectors(false)
  }

  const showGuestsHelper = () => {
    setShowLocation(false)
    setShowGuestsSelectors(true)
  }

  return (
    <S.FullFiltersBackground>
      <S.FullFiltersBox>
        <S.FullFiltersHeading>Edit your search<span><IconX onClick={switchFiltersSize} /></span></S.FullFiltersHeading>
        <S.FullFiltersBar>
          <S.FullInputBox>
            <S.FullInputLabel>Location</S.FullInputLabel>
            <S.FullInput onChange={locationInputHandler} autoFocus onFocus={showLocationHelper} value={filters.location} />
          </S.FullInputBox>
          <S.FullInputBox>
            <S.FullInputLabel>Guests</S.FullInputLabel>
            <S.FullInput value={filters.adultGuests + filters.childrenGuests} onFocus={showGuestsHelper} readOnly id='guests' />
          </S.FullInputBox>
          <S.SearchButton onClick={switchFiltersSize}><IconSearch size={16} />Search</S.SearchButton>
        </S.FullFiltersBar>
        <S.FullFiltersHelpers>
          {
            showLocation
              ? (
                <S.CitiesSuggestions>
                  {
                    uniqueData
                      .filter(stay => stay.city.toLowerCase().indexOf(filters.location.toLowerCase()) !== -1)
                      .map((stay, index) => <S.CitySuggestionItem onClick={() => suggestionHandler(stay.city)} key={index}><IconMapPinFilled size={20} /> {stay.city}, {stay.country}</S.CitySuggestionItem>)
                  }
                </S.CitiesSuggestions>
                )
              : <div />
          }
          {
            showGuestsSelectors
              ? (
                <S.AllCounters hidden={!showGuestsSelectors}>
                  <AdultsCounter />
                  <ChildrenCounter />
                </S.AllCounters>
                )
              : <div />
          }
        </S.FullFiltersHelpers>
      </S.FullFiltersBox>
    </S.FullFiltersBackground>
  )
}
