import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separetor } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <input id="task" />

          <label htmlFor="minutosAmount">durante</label>
          <input type="number" id="minutosAmount" />

          <span> minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          {" "}
          <Play size={24} /> Começar
        </button>
      </form>
    </HomeContainer>
  );
}
