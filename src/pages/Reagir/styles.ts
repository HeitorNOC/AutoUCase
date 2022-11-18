import styled from "styled-components";

export const ReagirContainer = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  border: 3px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  width: 320px;
  height: 50px;
  

  &::placeholder {
    color: ${props => props.theme.white};
    font-size: 16px;
    opacity: 0.5;
    padding: 0 10px;
    }

    font-size: 22px;
    color: ${props => props.theme.white};
`

export const ReagirGlassMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
  backdrop-filter: blur(21px);
  border-radius: 16px;

  padding: 0 50px;
`

export const ReagirTop = styled.div`
  font-size: 30px;
  line-height: 58px;

  color: ${props => props.theme.white};
  padding: 27px 130px 56px;
`

export const ReagirMain = styled.div`
  .tipo {
    color: ${props => props.theme.white};
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }

  h4 {
    font-size: 20px;
    line-height: 28px;
    color: ${props => props.theme.white};
    margin-bottom: 20px;
  }
  
  .normalInput {
    p {
      font-size: 16px;
      line-height: 29px;
      font-weight: bold;
      color: ${props => props.theme.white};
      margin-bottom: 10px;
    }

    input {
      margin-bottom: 20px;
    }
  }

  .reactions {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: ${props => props.theme.white};
    
    p {
      margin-right: 5px;
    }

    margin-bottom: 10px;
  }
`

export const ReagirBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 420px;
    height: 100px;
    margin-bottom: 30px;
  }
  margin-top: 10px;
`

export const ReagirButtonSubmit = styled.button`
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(78, 76, 81, 0.7) 100%);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(2.5px);
  border-radius: 9px;
  padding: 16px 32px;
  gap: 39px;
  font-size: 24px;
  line-height: 29px;
  color: ${props => props.theme.white};
  margin-bottom: 95px;
  cursor: pointer;
  transition: 0.4 ease-in-out;
  &:hover {
      opacity: 0.7;
  }
`