import { createContext, ReactNode, useState, useReducer } from 'react'
import { cyclesReducers } from '../reducers/cycles'
import { ActionsType } from '../constants/ActionsTypes'

interface CreateCycle {
  task: string
  minutesAmount: number
}
interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishDate?: Date
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  setAmountSecondsPassedFunction: (secund: number) => void
  createNewCycle: (data: CreateCycle) => void
  InterruptCorrenteCycle: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: ReactNode
}
export interface CyclesStates {
  cycles: Cycle[]
  activeCycleId: string | null
}
export function CyclesContextProvider({
  children,
}: CyclesContextProviderProps) {
  const [cyclesActive, dispatch] = useReducer(cyclesReducers, {
    cycles: [],
    activeCycleId: null,
  })

  const { cycles, activeCycleId } = cyclesActive
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  function setAmountSecondsPassedFunction(second: number) {
    setAmountSecondsPassed(second)
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    dispatch({
      type: ActionsType.MARK_CURRENT_CYCLE_AS_FINISH,
      payload: {
        activeCycleId,
      },
    })
  }
  function createNewCycle(data: CreateCycle) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch({
      type: ActionsType.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    })

    setAmountSecondsPassed(0)
    // reset()
  }

  function InterruptCorrenteCycle() {
    dispatch({
      type: ActionsType.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId,
      },
    })
  }
  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        amountSecondsPassed,
        setAmountSecondsPassedFunction,
        createNewCycle,
        InterruptCorrenteCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}
