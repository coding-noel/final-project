export default function Card({ title = "Put title here", poem = "Put poem here" }) {
  return (
    <div className="grow w-96 flex flex-col rounded-lg hover:scale-105 transition-all shadow-lg border-6 border-blue-300">
      <div className="flex flex-col gap-y-4 px-8 py-6">
        <h2 className="text-xl font-bold text-blue-600">{title}</h2>
        <pre className='font-serif text-blue-600'>{poem}</pre>
      </div>
    </div>
  )
}

