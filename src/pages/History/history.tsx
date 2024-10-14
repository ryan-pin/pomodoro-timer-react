import { HistoryContainer, HistoryList } from './styles'

export function History(){
    return(
        <HistoryContainer>
            <h1>Historico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>30 minutos</td>
                            <td>Há 2 horas</td>
                            <td>Concluido</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>30 minutos</td>
                            <td>Há 2 horas</td>
                            <td>Concluido</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>30 minutos</td>
                            <td>Há 2 horas</td>
                            <td>Concluido</td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}