import { User, SquaresFour, Star, Question, ArrowSquareOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { AutoUContext } from "../../context/AutouContext";
import { SidebarContainer, SidebarDown, SidebarUp } from "./styles";

export function Sidebar() {

  const handleDeleteUser = useContextSelector(AutoUContext, (context) => {
    return context.handleDeleteUser
  })

  const navigate = useNavigate()

  function handleLogOut() {
    navigate('/')
    handleDeleteUser()
  }

  return (
    <SidebarContainer>
      <SidebarUp>
        <div onClick={() => navigate('/profile')} style={{ cursor: "pointer" }}>
          <User size={24} color="#fff" />
          <p>Perfil</p>
        </div>
        <div onClick={() => navigate('/reagir')} style={{ cursor: "pointer" }}>
          <Star size={24} color="#fff" weight="fill" />
          <p>Reagir</p>
        </div>
        <div onClick={() => navigate('/dashboard')} style={{ cursor: "pointer" }}>
          <SquaresFour size={24} color="#fff" weight="fill" />
          <p>Dashboard</p>
        </div>
      </SidebarUp>
      <SidebarDown>
        <div onClick={() => navigate('/ajuda')} style={{ cursor: "pointer" }}>
          <Question size={24} color="#fff" weight="fill" />
          <p >Ajuda</p>
        </div>
        <div onClick={handleLogOut} style={{ cursor: "pointer" }}>
          <ArrowSquareOut size={24} color="#fff" />
          <p>Sair</p>
        </div>
      </SidebarDown>
    </SidebarContainer>
  )
}