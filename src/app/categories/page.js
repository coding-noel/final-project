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
          <div className="px-2 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-16">
            {categories.map(({ id, category }, index) => (
              <a
                  href={"category/" + id}
                  key={index} 
                  className='border-2 border-blue-300 p-0.5 hover:shadow-md hover:bg-blue-100 bg-blue-50 shadow'
              >
                <div
                  className="h-full w-full block p-8 rounded bg-white hover:bg-stone-50 border-3 border-blue-200 transition cursor-pointer text-center"
                >
                  <h3 className="text-blue-400 text-xl sm:text-lg">{category}</h3>
                </div>
              {/* <a
                key={index}
                href={"category/" + id}
                className="p-8 rounded-lg bg-white border-3 border-blue-100 shadow hover:shadow-lg hover:bg-stone-50 transition cursor-pointer text-center"
              >
                <h3 className="text-blue-400 text-xl">{category}</h3>
              </a> */}
              </a>
            ))}
          </div>
        </Main>
      </div>
    </div>
  )
}
