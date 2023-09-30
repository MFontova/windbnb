import * as S from './styles'

export const NotFound = () => {
  return (
    <S.NotFound className='not-found'>
      <p className='title'>Oops!</p>
      <p className='text'>It looks like we couldn't find any results that match your filters. Please double-check your criteria and try again. Thank you!</p>
    </S.NotFound>
  )
}
