import Header from './components/Header'
import Main from './components/Main'
import HomeComponent from './components/HomeComponent'

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <Header h1='Poem Collab'>
          Where people can read fun poems and <a href='./contribute' className='underline decoration-2 hover:text-blue-300'>share</a> their own poems if they want
        </Header>
        <Main>
          <HomeComponent />
        </Main>
      </div>
    </div>
  )
}
