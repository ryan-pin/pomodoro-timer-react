import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form'
import { 
  CountdownContainer, 
  FormContainer, 
  HomeContainer, 
  MinutesAmountInput, 
  Separetor, 
  StartCountdownButton, 
  TaskInput
}  from "./styles";

export function Home() {

  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any){

  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            list="task-suggestions" 
            placeholder="Dê o nome para a atividade"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="asd" />
          </datalist>

          <label htmlFor="minutosAmount">durante</label>
          <MinutesAmountInput 
            type="number" 
            id="minutosAmount" 
            placeholder="00"
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          {" "}
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
