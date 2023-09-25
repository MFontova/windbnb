import * as S from './styles.jsx'
import logo from '../../assets/logo.png'
import { Filters } from '../Filters/Filters.jsx'

export const Header = () => {
  return (
    <S.Header>
      <img src={logo} alt='windbnb logo' />
      <Filters />
    </S.Header>
  )
}
