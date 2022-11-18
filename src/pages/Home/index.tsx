import {
  HomeBottom,
  HomeContainer,
  HomeGlassMain,
  HomeMid,
  HomeTop,
  Input,
  LoginButton,
  SwitchLogin,
} from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useContextSelector } from 'use-context-selector'
import { AutoUContext } from "../../context/AutouContext";
import { useNavigate } from "react-router-dom";

const newLoginFormValidationSchema = zod.object({
  email: zod.string(),
  matricula: zod.string().min(4).max(4),
});

type NewLoginFormData = zod.infer<typeof newLoginFormValidationSchema>;

export function Home() {
  const loginVerify = useContextSelector(AutoUContext, (context) => {
    return context.verifyLogin
  })

  const loged = useContextSelector(AutoUContext, (context) => {
    return context.loged
  })


  const newLoginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(newLoginFormValidationSchema),
    defaultValues: {
      email: '',
      matricula: ''
    }
  });
  

  const { register, handleSubmit, reset } = newLoginForm;

  const [LoginType, setLoginType] = useState(true)

  

  function handleFormDispatch(data: NewLoginFormData) {
    loginVerify(data)

    if (loged == false) {
      window.alert("Usuário não encontrado")
      reset()
    } 
      
  }


  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleFormDispatch)}>
        

          <HomeGlassMain>
            <HomeTop>
              <h2>LOGIN</h2>
            </HomeTop>
            {
              LoginType ? (
                <>
                  <HomeMid>
                    <div>

                      <p>Email:</p>
                      <Input id="email" placeholder="Email" {...register("email")} />
                    </div>
                    <LoginButton type="submit">Entrar</LoginButton>
                  </HomeMid><HomeBottom>
                    <div style={{
                      border: '1px solid #ffffff',
                      width: '140px',
                    }}></div>
                    <SwitchLogin onClick={() => setLoginType(false)}>Ou entre com a <br /> matrícula</SwitchLogin>
                    <div style={{
                      border: '1px solid #ffffff',
                      width: '140px',
                    }}></div>
                  </HomeBottom>
                </>
              ) : (
                <>
                  <HomeMid>
                    <div>
                      <p>Matrícula:</p>
                      <Input id="matricula" placeholder="Matricula" {...register("matricula")} />
                    </div>
                    <LoginButton type="submit">Entrar</LoginButton>
                  </HomeMid>
                  <HomeBottom>
                    <div style={{
                      border: '1px solid #ffffff',
                      width: '140px',

                    }}></div>
                    <SwitchLogin onClick={() => setLoginType(true)}>Ou entre com o <br /> email</SwitchLogin>
                    <div style={{
                      border: '1px solid #ffffff',
                      width: '140px',

                    }}></div>
                  </HomeBottom>
                </>
              )
            }
          </HomeGlassMain>
        
      </form>
    </HomeContainer>
  )
}

