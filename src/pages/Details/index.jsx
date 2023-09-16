import {Container,Link,Content} from './styles'
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Tag} from '../../components/Tags'
import {ButtonText} from '../../components/ButtonText'
export  function Details(){
  return(
    <main>
      <Content>
        <Container>
          <Header></Header>
          <ButtonText title="excluir Nota"></ButtonText>
            <Section title="Links uteis">
              <Link>
                  <li><a href="https://github.com/victorrti">victor rodrigues github</a></li>          
              </Link>
              </Section>
              <Section title="Marcadores">
                <Tag title="React"></Tag>
                <Tag title="Node"></Tag>
              </Section>
              <Button title="Voltar" loading={true} />
        </Container>                
      </Content>
    </main>
   
     
  )
}