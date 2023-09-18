import {Container,Form,Background} from './style'
import {Input} from '../../components/Input'
import {FiLogIn,FiMail, FiLock} from 'react-icons/fi'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'


export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar e salvar seus links Uteis.</p>
                <h2>Faça seu Login</h2>
                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}/>
                <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}/>
                <Button title="Entrar"/>
                <ButtonText title="cadastre-se"/>
            </Form>
            <Background/>
        </Container>
    )

}