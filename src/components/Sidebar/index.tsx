import { User, SquaresFour, Star, Question, ArrowSquareOut } from "phosphor-react";
import { SidebarContainer, SidebarDown, SidebarUp } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarUp>
        <div>
          <User size={24} color="#fff"/>
          <p>Perfil</p>
        </div>
        <div>
          <Star size={24} color="#fff" weight="fill"/>
          <p>Reagir</p>
        </div>
        <div>
          <SquaresFour size={24} color="#fff" weight="fill"/>
          <p>Dashboard</p>
        </div>
      </SidebarUp>
      <SidebarDown>
        <div>
          <Question size={24} color="#fff" weight="fill"/>
          <p>Ajuda</p>
        </div>
        <div>
          <ArrowSquareOut size={24} color="#fff"/>
          <p>Sair</p>
        </div>
      </SidebarDown>
    </SidebarContainer>
  )
}