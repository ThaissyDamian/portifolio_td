import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (Props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Thaíssy Damian</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        thaissydamian
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante Desenvolvedora Full Stack Pylthon
      </Descricao>
      <BotaoTema onClick={Props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)
export default Sidebar
