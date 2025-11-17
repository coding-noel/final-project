import Poem from './Poem'
import { fullPoems } from '@/data/elements'



export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {fullPoems.map((poem, index) => (
          <Poem key={index} title={poem.title} poem={poem.poemLines} />
        ))}
      </div>
    </main>
  )
}
