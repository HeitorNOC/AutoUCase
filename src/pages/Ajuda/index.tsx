import { HelpContainer } from "./styles";
import Help from '../../assets/Help.svg'

export function Ajuda() {
  return (

    <HelpContainer>
      <h2>Ajuda</h2>
      <img src={Help} />
    </HelpContainer>
  )
}