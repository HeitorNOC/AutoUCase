import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: ${props => props.theme['bg-gray']};
  width: 263px;
  height: calc(100vh - 127px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`

export const SidebarUp = styled.div`
  margin-top: 51px;
  

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start; 

    p {
      margin-left: 17px;
      font-size: 24px;
      line-height: 29px;
      color: ${props => props.theme.white};
    }

    &:nth-child(1) {
      margin-bottom: 30px;
    }

    &:nth-child(2) {
      margin-bottom: 30px;
    }
  }
`

export const SidebarDown = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    p {
      margin-left: 17px;
      font-size: 24px;
      line-height: 29px;
      color: ${props => props.theme.white};
    }

    &:nth-child(2) {
      margin: 30px 0 40px 0;
    }
  }
`