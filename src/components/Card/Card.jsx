import * as S from './styles'
// import { IconStarFilled } from '@tabler/icons-react'

export const Card = ({ stay }) => {
  return (
    <S.Card>
      <img src={stay.photo} alt={stay.title} />
      <S.DetailInfo>
        {stay.superHost ? <S.SuperHost>SUPER HOST</S.SuperHost> : null}
        <S.TextInfo>{stay.type} . {stay.beds} beds</S.TextInfo>
        <S.Rating> <S.ColoredIcon size={20} color='red' /> {stay.rating} </S.Rating>
      </S.DetailInfo>
      <S.CardTitle>{stay.title}</S.CardTitle>
    </S.Card>
  )
}
