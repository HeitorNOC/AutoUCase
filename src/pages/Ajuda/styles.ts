import styled from "styled-components";

export const HelpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h2 {
    color: ${props => props.theme.white};
    font-size: 32px;
    margin-bottom: 20px;
   }
`