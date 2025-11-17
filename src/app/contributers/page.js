import Image from 'next/image'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Bio from '../components/Bio'
import Bios from '../components/Bios'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header h1='Contributers'>
        </Header>
        <Bios />
      </div>
    </div>
  )
}
