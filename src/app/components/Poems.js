import Poem from './Poem'
import { fullPoems } from '@/data/elements'



export default function Poems() {
  return (
    <div className="flex gap-x-12 flex-wrap gap-y-6" id="card-container">
      {fullPoems.map((poemPlusData, index) => (
        <Poem key={index} props={poemPlusData}/>
      ))}
    </div>
  )
}
