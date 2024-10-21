import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../Home";
import { useFormContext } from "react-hook-form";


export function NewCycleForm() {

  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

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