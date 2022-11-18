import { useContextSelector } from "use-context-selector";
import { AutoUContext } from "../../context/AutouContext";
import { ProfileContainer, ProfileMain, ProfileUpper, ReactionsCard } from "./styles";
import noReaction from '../../assets/noReactions.svg'

export function Profile() {

    const user = useContextSelector(AutoUContext, (context) => {
        return context.actualUser
      })

      const total = useContextSelector(AutoUContext, (context) => {
        return context.totalReacoes
      })

    


    return (
        <ProfileContainer>
            <ProfileUpper>
                <p>{user?.nome}</p>
                <p>Total de reações: {total}</p>
            </ProfileUpper>
            <ProfileMain>
                {total == 0 ? (
                    <>
                    <div className="noReaction">
                        <h4>Você ainda não tem reações 😔</h4>
                        <img src={noReaction} />
                    </div>
                    </>
                ) : (
                    <>
                        <div className="reaction">
                            <div>
                                <p>Like: {user?.reacoes.Like.count}</p> 
                                {
                                    user?.reacoes.Orgulho.motivo == "" ? (
                                        <p>Não tem motivos</p>
                                    ) : (
                                        <>
                                            <p>Último Motivo:</p>
                                            <p className="last">{user?.reacoes.Like.motivo}</p> 
                                        </>
                                    )
                                }
                            </div>
                            <div>
                                <p>Orgulho: {user?.reacoes.Orgulho.count}</p> 
                                {
                                    user?.reacoes.Orgulho.motivo == "" ? (
                                        <p>Não tem motivos</p>
                                    ) : (
                                        <>
                                            <p>Último Motivo:</p>
                                            <p className="last">{user?.reacoes.Orgulho.motivo}</p> 
                                        </>
                                    )
                                }
                                
                            </div>
                            <div>
                                <p>Excelente trabalho: {user?.reacoes.Excelente_Trabalho.count}</p> 
                                {
                                    user?.reacoes.Orgulho.motivo == "" ? (
                                        <p>Não tem motivos</p>
                                    ) : (
                                        <>
                                            <p>Último Motivo:</p>
                                            <p className="last">{user?.reacoes.Excelente_Trabalho.motivo}</p> 
                                        </>
                                    )
                                }
                            </div>
                            <div>
                                <p>Colaboracao: {user?.reacoes.Colaboracao.count}</p> 
                                {
                                    user?.reacoes.Orgulho.motivo == "" ? (
                                        <p>Não tem motivos</p>
                                    ) : (
                                        <>
                                            <p>Último Motivo:</p>
                                            <p className="last">{user?.reacoes.Colaboracao.motivo}</p> 
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </>
                )}
            </ProfileMain>
        </ProfileContainer>
    )
}