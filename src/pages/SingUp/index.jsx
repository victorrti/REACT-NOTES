import {Link} from 'react-router-dom';
import {Container,Form,Background} from './style'
import {Input} from '../../components/Input'
import {FiLogIn,FiMail, FiLock,FiUser} from 'react-icons/fi'
import {Button} from '../../components/Button'
import {ButtonText} from '../../components/ButtonText'


export function SingUp(){
    return(
        <Container>
            <Background/>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para gerenciar e salvar seus links Uteis.</p>
                <h2>Crie Sua Conta</h2>
                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}/>
                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}/>
                <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}/>
                <Button title="cadastrar"/>
                <Link to="/">Voltar Parar o Login</Link>                
                
            </Form>
            
        </Container>
    )

}