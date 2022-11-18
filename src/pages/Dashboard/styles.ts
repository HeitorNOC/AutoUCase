import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 10px;

    p {
      font-size: 20px;
    }
  }
`

export const Top1Card = styled.div`
  background: #FFD700;
`

export const Top2Card = styled.div`
  background: #C0C0C0;
`

export const Top3Card = styled.div`
  background:  #CD7F32;
`