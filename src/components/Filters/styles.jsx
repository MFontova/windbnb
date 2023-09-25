import styled from 'styled-components'

export const LiteFiltersBox = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 16px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.10);
  
  & > * {
    cursor: pointer;
  }
`

export const FullFiltersBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const FullFiltersBox = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  z-index: 999 !important;
`

export const FullFiltersBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-radius: 16px;
  margin: 0 100px;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.10);
`

export const FullFiltersHelpers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 100px;
  /* padding: 20px; */
`

export const CitiesSuggestions = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 20px;
`

export const CitySuggestionItem = styled.p`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #4f4f4f;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  padding: 20px 10px;
  margin: 0;
  transition: 150ms;

  &:hover{
    background-color: #f5f5f5;
  }
`

export const AllCounters = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
`

export const GuestsCounterBox = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 14px;

  & p {
    margin: 0;
  }
`

export const GuestsCounter = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  max-width: 100px;

  & button {
    border-radius: 4px;
    border: 1px solid #828282;
    background-color: transparent;
    height: 23px;
    width: 23px;
    font-size: 18px;
    cursor: pointer;
  }
`

export const CounterTitle = styled.h6`
  font-size: 14px;
  font-weight: 700;
  color: #333;
  margin: 0;
`

export const CounterDescription = styled.p`
  color: #bdbdbd;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`

export const Input = styled.input`
  padding: 12px 15px;
  border: none;
  border-radius: 16px;
  margin-left: 0;
  /* box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.10); */
`

export const FullInputBox = styled.div`
  padding: 12px 25px;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-right: 1px solid #f2f2f2;
  border-radius: 16px 0 0 16px;
  margin-left: 0;

  &:hover, &:focus-within {
    border: 1px solid #333;
    border-radius: 16px;
  }
`

export const FullInput = styled.input`
  padding: 5px 0;
  border: none;
`

export const FullInputLabel = styled.label`
  color: #333;
  font-size: 9px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: #f2f2f2;
`

export const Search = styled.span`
  color: #EB5757;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
`

export const SearchButton = styled.button`
  border-radius: 16px;
  background: #EB5757;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.10);
  padding: 10px 20px;
  border: none;
  color: white;
  margin: 10px auto;
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  cursor: pointer;
`
