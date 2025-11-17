import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Header h1='Contribute'>
          Soon, you'll be able to use the form below to add you're own poems
        </Header>
      </div>
    </div>
  )
}
