import{Container,Form} from './styles'
import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'


export function New(){
    return (
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>
                    <Input placeholder="Titulo"></Input>
                    <TextArea placeholder="Observações"/>
                    <Section title="Links Uteis">
                        <NoteItem value="https://github.com/victorrti"></NoteItem>
                        <NoteItem value=""  isNew={true}></NoteItem>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}