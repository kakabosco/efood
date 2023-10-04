import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background-color: ${colors.secondaryBgColor};

  > img {
    margin-bottom: 32px;
  }

  p {
    width: 480px;
    font-size: 10px;
    text-align: center;

    @media (max-width: ${breakpoints.tablet}) {
      width: 80%;
    }
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;

  a {
    display: flex;
    align-items: center;
  }
`
