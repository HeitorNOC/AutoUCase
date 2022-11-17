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

const newLoginFormValidationSchema = zod.object({
  email: zod.string().email("Insira um email válido").optional(),
  matricula: zod.string().min(4).optional(),
});

type NewLoginFormData = zod.infer<typeof newLoginFormValidationSchema>;

export function Home() {
  const newLoginForm = useForm<NewLoginFormData>({
    resolver: zodResolver(newLoginFormValidationSchema),
  });
  const { register, handleSubmit } = newLoginForm;
  return (
    <HomeContainer>
      <form>
        <HomeGlassMain>
          <HomeTop>
            <h2>LOGIN</h2>
          </HomeTop>
          <HomeMid>
            <div>

              <p>Email:</p>
              <Input id="email" placeholder="Email" {...register("email")} />
            </div>
            <LoginButton type="submit">Entrar</LoginButton>
          </HomeMid>
          <HomeBottom>
            <div style={{
              border: '1px solid #ffffff',
              width: '140px',
              
            }}></div>
            <SwitchLogin>Ou entre com a <br /> matrícula</SwitchLogin>
            <div style={{
              border: '1px solid #ffffff',
              width: '140px',
              
            }}></div>
          </HomeBottom>
        </HomeGlassMain>
      </form>
    </HomeContainer>
  )
}
