import { IconStarFilled } from '@tabler/icons-react'
import styled from 'styled-components'

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 21px;

  & img {
    height: 269px;
    object-fit: cover;
    border-radius: 24px;
  }
`
export const DetailInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`

export const SuperHost = styled.span`
  border: 1px solid #4f4f4f;
  border-radius: 12px;
  font-size: 12px;
  padding: 6px;
  color: #4f4f4f;
  font-weight: 700;
`

export const TextInfo = styled.p`
  color: #828282;
  font-size: 14px;
  margin: 0;
`

export const Rating = styled.span`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #4f4f4f;
`

export const CardTitle = styled.h5`
  margin: 0;
`

export const ColoredIcon = styled(IconStarFilled)`
  color: #EB5757;
`
