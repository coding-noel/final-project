import Bio from './Bio'


const fullPoems = [
  {
    name: 'Alice Johnson',
    likes: "hiking, painting, and classical music.",
    dislikes: "loud noises and spicy food.",
    favoriteColor: "Turquoise",
    favoriteAnimal: "Dolphin",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Bob Smith',
    likes: "cooking, traveling, and photography.",
    dislikes: "traffic jams and cold weather.",
    favoriteColor: "Crimson",
    favoriteAnimal: "Red Panda",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Catherine Lee',
    likes: "about reading, yoga, and gardening.",
    dislikes: "and procrastination.",
    favoriteColor: "Lavender",
    favoriteAnimal: "Hedgehog",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'David Martinez',
    likes: "gaming, basketball, and sci-fi movies.",
    dislikes: "early mornings and crowded places.",
    favoriteColor: "Midnight Blue",
    favoriteAnimal: "Wolf",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Eva Chen',
    likes: "dancing, baking, and fashion design.",
    dislikes: "spiders and rainy days.",
    favoriteColor: "Coral Pink",
    favoriteAnimal: "Flamingo",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Frank Wilson',
    likes: "fishing, woodworking, and jazz music.",
    dislikes: "crowded places and spicy food.",
    favoriteColor: "Forest Green",
    favoriteAnimal: "Eagle",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Grace Kim',
    likes: "photography, traveling, and sushi.",
    dislikes: "loud noises and early mornings.",
    favoriteColor: "Sunset Orange",
    favoriteAnimal: "Sea Turtle",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Henry O\'Connor',
    likes: "cycling, video games, and rock music.",
    dislikes: "rainy days and traffic jams.",
    favoriteColor: "Electric Yellow",
    favoriteAnimal: "Cheetah",
    exists: "nope. Matea wrote this person's poems.",
  },
  {
    name: 'Matea Gillette',
    likes: "puzzles, hanging out with friends, and coding.",
    dislikes: "bugs (both the insect and software variety) and waiting in long lines.",
    favoriteColor: "Electric Blue and periwinkle",
    favoriteAnimal: "Otter",
    exists: "yep. Matea wrote her own poems.",
  }
]

export default function Main() {
  return (
    <main>
      <div className="flex gap-x-12 my-12 flex-wrap gap-y-6" id="card-container">
        {fullPoems.map(({ name, likes, dislikes, favoriteColor, favoriteAnimal, exists}, index) => (
          <Bio key={index} name={name} likes={likes} dislikes={dislikes} favoriteColor={favoriteColor} favoriteAnimal={favoriteAnimal} exists={exists} />
        ))}
      </div>
    </main>
  )
}
