import Header from '../components/Header'
import Main from '../components/Main'
import { categories } from '@/data/elements'

export default function Home() {
  return (
    <div>
      <div className="p-8">
        <Header h1='Categories'>
          Browse poem catagories below
        </Header>
        <Main>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map(({ id, category }, index) => (
              <a
                  href={"category/" + id}
                  key={index} 
                  className='border-3 border-blue-300 p-0.5 hover:shadow-md hover:bg-indigo-200 bg-green-200 shadow rounded-sm'
              >
                <div
                  className="h-full w-full block p-8 rounded bg-white border-3 border-blue-300 transition cursor-pointer text-center"
                >
                  <h3 className="text-indigo-500 underline text-2xl sm:text-lg">{category}</h3>
                </div>
              </a>
            ))}
          </div>
        </Main>
      </div>
    </div>
  )
}
