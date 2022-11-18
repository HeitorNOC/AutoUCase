import { useContextSelector } from "use-context-selector";
import { AutoUContext } from "../../context/AutouContext";
import { DashboardContainer, Top1Card, Top2Card, Top3Card } from "./styles";

export function Dashboard() {
  const top1 = useContextSelector(AutoUContext, (context) => {
    return context.userTop1
  })

  const top2 = useContextSelector(AutoUContext, (context) => {
    return context.userTop2
  })

  const top3 = useContextSelector(AutoUContext, (context) => {
    return context.userTop3
  })
  
  return (

    <DashboardContainer>
      <Top2Card>
        <div className="upper">
          <img src={top2?.avatar} />
        </div>
        <div className="mid">
          <h2>{top2?.nome}{' '}{top2?.sobrenome}</h2>
          <p>{top2?.departamento}</p>
          <p>{top2?.cargo}</p>
        </div>
        <div className="down">
          <p>2º Lugar</p>
        </div>
      </Top2Card>
      <Top1Card>
        <div className="upper">
          <img src={top1?.avatar} />
        </div>
        <div className="mid">
          <h2>{top1?.nome}{' '}{top1?.sobrenome}</h2>
          <p>{top1?.departamento}</p>
          <p>{top1?.cargo}</p>
        </div>
        <div className="down">
          <p>1º Lugar</p>
        </div>
      </Top1Card>
      <Top3Card>
        <div className="upper">
          <img src={top3?.avatar} />
        </div>
        <div className="mid">
          <h2>{top3?.nome}{' '}{top3?.sobrenome}</h2>
          <p>{top3?.departamento}</p>
          <p>{top3?.cargo}</p>
        </div>
        <div className="down">
          <p>3º Lugar</p>
        </div>
      </Top3Card>
    </DashboardContainer>
  )
}