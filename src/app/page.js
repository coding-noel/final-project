import Image from 'next/image'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Poems from './components/Poems'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header h1='Poem Collab'>
          Where people can read fun peoms and <a href='./contribute' className='underline decoration-2'>share</a> their own poems if they want
        </Header>
      </div>
    </div>
  )
}
