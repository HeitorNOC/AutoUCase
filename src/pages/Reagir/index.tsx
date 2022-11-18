import { Input, ReagirBottom, ReagirButtonSubmit, ReagirContainer, ReagirGlassMain, ReagirMain, ReagirTop } from "./styles";
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useContextSelector } from "use-context-selector";
import { AutoUContext } from "../../context/AutouContext";

const newReactionFormValidationSchema = zod.object({
  matricula: zod.string().min(4).max(4),
  motivo: zod.string(),
  reactionLike: zod.string(),
  reactionOrgulho: zod.string(),
  reactionExcelente_Trabalho: zod.string(),
  reactionColaboracao: zod.string(),
})

type NewReactionFormData = zod.infer<typeof newReactionFormValidationSchema>



export function Reagir() {
  const handleReagir = useContextSelector(AutoUContext, (context) => {
    return context.newReactUser
  })

  const newReactionForm = useForm<NewReactionFormData>({
    resolver: zodResolver(newReactionFormValidationSchema),
    defaultValues: {
      matricula: '',
      motivo: '',
      reactionOrgulho: '',
      reactionExcelente_Trabalho: '',
      reactionColaboracao: '',
      reactionLike: ''
    }
  })

  const { register, handleSubmit, reset } = newReactionForm
  
  const [reactionType,  setReactionType] = useState("")

  function handleFormDispatch(data: NewReactionFormData) {
    handleReagir(data)
      .then(response => {
        window.alert(response)
        reset()
      })
  }


  return (
    <ReagirContainer>
      <form onSubmit={handleSubmit(handleFormDispatch)}>
        <ReagirGlassMain>
          <ReagirTop>
            <h2>Reagir</h2>
          </ReagirTop>
          <ReagirMain>
            <h4>Para quem você quem enviar uma reação?</h4>
            <div className="normalInput">
              <p>Matrícula:</p>
              <Input id="matricula" placeholder="Matricula de quem vai receber a reação" {...register("matricula")}/>
            </div>
            <div >
              <p className="tipo">Tipo da reação:</p>
              <div className="reactions">
                <p>Like</p>
                <input value="Like" type="radio" {...register("reactionLike")} onChange={() => setReactionType("Like")} checked={reactionType == "Like"}/>
              </div>
              <div className="reactions">
                <p>Orgulho</p>
                <input value="Orgulho" type="radio" {...register("reactionOrgulho")} onChange={() => setReactionType("Orgulho")} checked={reactionType == "Orgulho"}/>
              </div>
              <div className="reactions">
                <p>Excelente Trabalho</p>
                <input value="Excelente_Trabalho" type="radio" {...register("reactionExcelente_Trabalho")} onChange={() => setReactionType("Excelente_Trabalho")} checked={reactionType == "Excelente_Trabalho"}/>
              </div>
              <div className="reactions">
                <p>Colaboração</p>
                <input value="Colaboracao" type="radio" {...register("reactionColaboracao")} onChange={() => setReactionType("Colaboracao")} checked={reactionType == "Colaboracao"}/>
              </div>
            </div>
          </ReagirMain>
          <ReagirBottom>
            <Input id="motivo" placeholder="Motivo da reação" {...register("motivo")}/>
            <ReagirButtonSubmit type="submit">Reagir</ReagirButtonSubmit>
          </ReagirBottom>
        </ReagirGlassMain>
      </form>
    </ReagirContainer>
  )
}