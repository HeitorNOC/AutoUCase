import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 20px 126px 17px;

  background: ${props => props.theme['bg-gray']};

  .avatar {
    
    width: 90px;
    height: 90px;
    border-radius: 999px;
  }

  .underline {
    margin-left: -158px;
    
  }
`