import Button from './Button'
import Tag from './Tag'
import Image from 'next/image'

const navigationButtons = [
  {
    title: 'Home',
    href: '/',
    isNew: false
  },
  {
    title: 'Categories',
    href: '/categories',
    isNew: false
  },
  {
    title: 'All poems',
    href: '/poems',
    isNew: false
  },
  {
    title: 'Contributors',
    href: '/contributors',
    isNew: false
  },
  {
    title: 'Contribute',
    href: '/contribute',
    isNew: true
  }
]

export default function Navbar() {
  return (
    <nav className="bg-indigo-300 text-white font-sans h-full flex justify-between p-6 items-center sticky top-0 shadow-lg">
      <Image src="/logo.png" width="60" height="60" alt="logo"/>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ title, href, isNew}) =>
          <Button href = {href} key = {title} classNameProp='flex'>
            {title}
            {isNew && <Tag classNames='ml-2 animate-pulse'/>}
          </Button>
        )}
      </div>
    </nav>
  )
}
