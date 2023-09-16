import {Container,Brand,Menu,Search,Content, NewNote} from './style'
import {Header} from  '../../components/Header'
export function Home(){
    return(
    <Container>
        <Brand>
            <h1>Notes</h1>
        </Brand>
        <Header></Header>
        <Menu>
            <Search></Search>
        </Menu>
        <Content>
            <NewNote></NewNote>
        </Content>
    </Container>
    )

}