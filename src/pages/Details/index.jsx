import {Container,Link,Content} from './styles'
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Tag} from '../../components/Tags'
import {ButtonText} from '../../components/ButtonText'
export  function Details(){
  return(
    
    <Container>
      <Header></Header>
      <main>
        <Content>       
        <ButtonText title="excluir Nota"></ButtonText>
        <h1>Introdução React</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ducimus molestias architecto quia corporis consequuntur fugit tempora possimus est, maxime voluptatem, a qui beatae laudantium aliquam provident nesciunt ab illo aut.</p>
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
      </Content>
      </main>
    </Container>
     
  )
}