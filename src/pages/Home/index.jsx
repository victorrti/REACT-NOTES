import {Container,Brand,Menu,Search,Content, NewNote} from './style'
import {Header} from  '../../components/Header'
import {ButtonText} from '../../components/ButtonText'
import {FiPlus,FiSearch} from 'react-icons/fi'
import {Input} from '../../components/Input';
import {Section} from '../../components/Section'
import {Note} from '../../components/Note'
export function Home(){
    return(
    <Container>
        <Brand>
            <h1>Notes</h1>
        </Brand>
        <Header></Header>
        <Menu>
            <li><ButtonText title="Todos"  $isactive={true}/></li>
            <li><ButtonText title="React"/></li>
            <li><ButtonText title="Node"/></li>
        </Menu>
        <Search>
            <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}></Input>
        </Search>
        <Content>
            <Section title="Minhas Notas">
                <Note to="/details" data={{
                    title:"React", 
                    tags:[
                        {id:'1',name:'React'},
                        {id:'2',name:'Node'}
                    ]}
                    }/>                    

            </Section>
            
        </Content>
        <NewNote to="/new">
                <FiPlus/>
                Criar nota           
        </NewNote>
    </Container>
    )

}