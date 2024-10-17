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
import { useState } from "react";

interface NewcycleFormData{
  task: string;
  minutesAmount: number
}

interface Cycle{
  id: string 
  task: string
  minutesAmount: number
}

export function Home() {

  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed ] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm(
  )

  function handleCreateNewCycle(data: NewcycleFormData){
    const id = String(new Date().getTime())

    const newCycle: Cycle ={
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...cycles, newCycle])
    setActiveCycleId(id)
    reset()
  }

  const activeCycle = cycles.find((cycle) => cycle.id == activeCycleId)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

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
            required
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
            required
          />

          <span> minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separetor>:</Separetor>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          {" "}
          <Play size={24} /> Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
