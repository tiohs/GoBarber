import { useContext } from 'react'
import { CyclesContext } from '../../Context/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import pt from 'date-fns/locale/pt'
import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycles) => {
              return (
                <tr key={cycles.id}>
                  <td>{cycles.task}</td>
                  <td>{cycles.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(cycles.startDate, {
                      addSuffix: true,
                      locale: pt,
                    })}
                  </td>
                  <td>
                    {cycles.finishDate && (
                      <Status statusColor="green">Concluído</Status>
                    )}
                    {cycles.interruptedDate && (
                      <Status statusColor="red">Interrompido</Status>
                    )}
                    {!cycles.interruptedDate && !cycles.finishDate && (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
