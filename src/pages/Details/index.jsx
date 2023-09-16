import {Container,Link} from './styles'
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
export  function Details(){
  return(
    <Container>
      <Header></Header>
      <Section title="Links uteis">
        <Link>
          <li><a href="https://github.com/victorrti">victor rodrigues github</a></li>          
        </Link>
      </Section>
      <Section title="Marcadores">
        <Link>
          <li><a href="https://github.com/victorrti">victor rodrigues github</a></li>          
        </Link>
      </Section>
      <Button title="Voltar" loading={true} />
    </Container>
     
  )
}