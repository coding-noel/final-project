import Main from '../components/Main'
import Header from '../components/Header'
import Bios from '../components/Bios'

export default function Home() {
  return (
    <div className="p-8">
      
      <Header h1='Contributors'>
      </Header>

      <Main>
        <Bios />
      </Main>
    </div>
  )
}
