import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 94px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 19px 13px;
    gap: 30px;
    
    & img {
      justify-self: flex-start;
      align-self: flex-start;
    }
  }

`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  color: #828282;
  padding: 25px 0;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 95%;
    font-size: 10px;
  }
`

export const Main = styled.main`
  padding: 23px 94px;
  display: flex;
  flex-direction: column;

  .title-box{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`
// export const Main = styled.main`
//   padding: 23px 94px;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
// `
