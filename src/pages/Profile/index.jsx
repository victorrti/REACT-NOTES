import {Container,Form,Avatar} from './styles'
import {FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from "../../components/Button";

export function Profile(){
    return(
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>
            </header>
            <Form>
                <Avatar>
                    <img src="https://github.com/victorrti.png" alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>
                    
                </Avatar>
                <Input placeholder="nome"
                type="text"
                icon={FiUser}/>
                 <Input placeholder="E-mail"
                type="text"
                icon={FiMail}/>
                <Input placeholder="senha Atual"
                type="password"
                icon={FiLock}/>
                <Input placeholder="Nova Senha"
                type="password"
                icon={FiLock}/>
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}