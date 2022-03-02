import { Summary } from '../Summary';
import { TransitionsTable } from '../TransactionsTable';
import { Container } from './styles';

export function Dashboard() {
    return (
        <Container>
            <Summary/>
            <TransitionsTable/>
        </Container>
    )
}