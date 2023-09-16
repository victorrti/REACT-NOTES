import {Container,Brand,Menu,Search,Content, NewNote} from './style'
import {Header} from  '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
export function Home(){
    return(
    <Container>
        <Brand>
            <h1>Notes</h1>
        </Brand>
        <Header></Header>
        <Menu>
            <li> <ButtonText title="Todos"  $isactive={true}/></li>
            <li><ButtonText title="React"/></li>
            <li><ButtonText title="Node"/></li>
        </Menu>
        <Search></Search>
        <Content>
            <NewNote></NewNote>
        </Content>
    </Container>
    )

}