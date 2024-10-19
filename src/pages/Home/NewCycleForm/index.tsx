import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";


export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm();

    return (
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê o nome para a atividade"
            {...register("task")}
            disabled={!!activeCycle}
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
            min={1}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
            disabled={!!activeCycle}
            required
          />

          <span> minutos.</span>
        </FormContainer>
    )
}