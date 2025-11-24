export default function Bio({ name = "Put name here", likes = "either this person decided to not share his/her interests or he/she is just disinterested.", dislikes = "either this person didn't feel like sharing his/her dislikes or he/she is just very accepting.", favoriteColor = "this person doesn't know the name of his/her favorite color", favoriteAnimal = "there are so many cute animals that this person can't chose just one.", exists = "we're not sure. Whoever it was didn't say", id = "#" }) {
  let info = [
    {
      start: "Likes",
      message: likes,
    },
    {
      start: "Dislikes",
      message: dislikes,
    },
    {
      start: "Favorite color",
      message: favoriteColor,
    },
    {
      start: "Favorite animal",
      message: favoriteAnimal,
    },
    {
      start: "Exists",
      message: exists,
    },
  ]
  return (
    <a href={`people/${id}`}className="flex-1 min-w-70 max-w-110 rounded-lg shadow-lg">
      <div className="">
        <h2 className="px-6 py-2 text-xl text-white bg-blue-500 flex-1">{name}</h2>
        <div className="p-6 pt-4">
          {info.map(({ start, message }, index) => (
            <p className='font-serif text-blue-500 flex-1' key={index}>{start}: {message}</p>
          ))}
        </div>


      </div>
    </a>
  )
}
