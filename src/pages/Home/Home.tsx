import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separetor, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput id="task" list="task-suggestions" placeholder="Dê o nome para a atividade" />

          <datalist id="task-suggestions">
            <option value="asd" />
          </datalist>

          <label htmlFor="minutosAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutosAmount" 
            placeholder="00"
            step={5}
            min={5}
            max={60} 
          />

          <span> minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separetor>:</Separetor>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          {" "}
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
