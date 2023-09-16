import {Container,Profile} from './style'

export function Header(){
    return(
        <Container>
            <Profile>
                <img src="https://github.com/victorrti.png" alt="foto do usuario"></img>
                <div>
                    <span>Bem-vindo!</span>
                    <strong>Victor Pereira</strong>
                </div>
                
            </Profile>
        </Container>
    );
}