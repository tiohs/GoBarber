import { CyclesStates } from '../Context/CyclesContext'
import { ActionsType } from '../constants/ActionsTypes'

export function cyclesReducers(state: CyclesStates, action: any) {
  switch (action.type) {
    case ActionsType.ADD_NEW_CYCLE:
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    case ActionsType.INTERRUPT_CURRENT_CYCLE:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    case ActionsType.MARK_CURRENT_CYCLE_AS_FINISH:
      return {
        ...state,
        cycles: state.cycles.map((cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishDate: new Date() }
          } else {
            return cycle
          }
        }),
        activeCycleId: null,
      }
    default:
      return state
  }
}
