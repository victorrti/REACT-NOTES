import {Container} from './styles'
import {Button} from '../../components/Button'
import {Header} from '../../components/Header'
export  function Details(){
  return(
    <Container>
      <Header></Header>
      <Button title="Voltar" loading={true} />
    </Container>
     
  )
}