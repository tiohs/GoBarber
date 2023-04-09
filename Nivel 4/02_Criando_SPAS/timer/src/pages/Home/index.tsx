import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Play, HandPalm } from 'phosphor-react'
import { NewCicloForm } from './NewCicloForm'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styes'
import { CountDown } from './Countdown'
import { CyclesContext } from '../../Context/CyclesContext'

interface newCycleFormData {
  task: string
  minutesAmount: number
}

export function Home() {
  const { activeCycle, InterruptCorrenteCycle, createNewCycle } =
    useContext(CyclesContext)
  const newCycleForm = useForm<newCycleFormData>({
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = newCycleForm
  const task = !watch('task')

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data)
    reset()
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCicloForm />
        </FormProvider>

        <CountDown />

        {activeCycle ? (
          <StopCountdownButton type="submit" onClick={InterruptCorrenteCycle}>
            <HandPalm />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton type="submit" disabled={task}>
            <Play />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
