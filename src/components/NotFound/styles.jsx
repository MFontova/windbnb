import styled from 'styled-components'

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .title {
    font-size: xx-large;
    font-weight: 700;
  }

  .text {
    text-align: center;
    line-height: 25px;
  }
`
