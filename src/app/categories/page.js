import Header from '../components/Header'
import Main from '../components/Main'
import { categories } from '@/data/elements'

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <Header h1='Categories'>
          I think I will put different collections of poems here
        </Header>
        <Main>
          <div className="px-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 py-16">
            {categories.map(({ id, category }, index) => (
              <a
                key={index}
                href={"category/" + id}
                className="p-8 rounded-lg bg-white border-3 border-blue-100 shadow hover:shadow-lg hover:bg-stone-50 transition cursor-pointer text-center"
              >
                <h3 className="text-blue-400 text-xl">{category}</h3>
              </a>
            ))}
          </div>
        </Main>
      </div>
    </div>
  )
}
