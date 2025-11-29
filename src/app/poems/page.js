import Header from '../components/Header'
import Poems from '../components/Poems'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <Header h1='Poems'>
          A full list of all the poems on this site
        </Header>
        <Main>
          <Poems />
        </Main>
      </div>
    </div>
  )
}
