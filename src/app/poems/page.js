import Image from 'next/image'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Poems from '../components/Poems'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header h1='Poems'>
          A full list of all the poems on this site
        </Header>
        <Poems />
      </div>
    </div>
  )
}
