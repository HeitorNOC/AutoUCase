import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ProfileUpper = styled.div`
  p {
    font-size: 24px;
    line-height: 29px;
    color: ${props => props.theme.white};
    margin-bottom: 20px;
  }
`

export const ProfileMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .reaction {
    display: flex;
    background: #D9D9D9;
    width: fit-content;
    padding: 20px;
    gap: 20px;

    div {
      background: #1A1D1F;
      color: ${props => props.theme.white};
      padding: 20px;
      p {
        padding: 10px 0 30px 0;
      }
    }
  }
`

export const ReactionsCard = styled.div``