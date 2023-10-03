import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  padding: 8px;
  border-radius: 12px;
  border: 1px solid ${colors.mainColor};
  background-color: ${colors.white};

  > img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Tag = styled.div`
  display: inline-block;
  margin-left: 8px;
  padding: 6px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 6px;
  color: ${colors.secondaryBgColor};
  background-color: ${colors.mainColor};
`

export const About = styled(Tag)`
  margin-left: 0;
`

export const InfoContainer = styled.div`
  padding-top: 8px;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
`

export const RatingDiv = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
    height: 20px;
  }
`

export const Rating = styled.span`
  font-size: 18px;
  font-weight: bold;
`

export const Description = styled.p`
  display: block;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 22px;
`
