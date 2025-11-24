import Bio from './Bio'
import { people } from '../../data/elements'

export default function Bios() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {people.map(({ name, likes, dislikes, favoriteColor, favoriteAnimal, exists, id }, index) => (
          <Bio key={index} name={name} likes={likes} dislikes={dislikes} favoriteColor={favoriteColor} favoriteAnimal={favoriteAnimal} exists={exists} id={id} />
        ))} 
      </div>
    </main>
  )
}
