import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HomeGlassMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(21px);
    border-radius: 16px;
`

export const HomeTop = styled.div`
    font-size: 38px;
    line-height: 58px;
    color: ${props => props.theme.white};
    padding: 27px 130px 76px;
`

export const HomeMid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 24px;
        line-height: 29px;
        color: ${props => props.theme.white};
        margin-bottom: 34px;
    }

`

export const HomeBottom = styled.div`
    display: flex;
    align-items: center;
    padding: 0 0 50px 0;
    div {
        
        &:nth-child(1) {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        &:nth-last-child() {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    }
    
`

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.2);
    border: 3px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    width: 320px;
    height: 50px;
    margin-bottom: 88px;

    &::placeholder {
        color: ${props => props.theme.white};
        font-size: 16px;
        opacity: 0.5;
        padding: 0 10px;
    }

    font-size: 22px;
    color: ${props => props.theme.white};
`

export const LoginButton = styled.button`
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

export const SwitchLogin = styled.a`
        padding: 0 20px;
        flex-wrap: wrap;
        text-align: center;
        font-size: 24px;
        line-height: 29px;
        color: ${props => props.theme.white};
        cursor: pointer;
`