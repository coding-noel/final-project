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
    <a href={`people/${id}`}className="flex-1 min-w-70 max-w-110 rounded-sm shadow-lg border-blue-300 border-2 bg-green-200 p-0.5">
      <div className="border-2 border-blue-300 bg-white w-full h-full">
        <h2 className="px-6 py-2 text-xl text-white bg-indigo-400 flex-1">{name}</h2>
        
        <div className="p-6 pt-4 flex flex-col justify-between w-full h-[calc(100%-2.5rem-4px)]">
          {info.map(({ start, message }, index) => (
            <div className="m-0.5" key={index}>
              <h4 className="font-semibold inline text-blue-500">{start}: </h4>
              <p className='block font-serif text-blue-500 inline'>{message}</p>
            </div>
            
          ))}
        </div>


      </div>
    </a>
  )
}
