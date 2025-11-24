export default function Header({ h1 = "Primary header", children }) {
  return (
    <header className="flex flex-col gap-y-6 shadow-lg py-12 px-4 border-4 border-blue-50">
      <h1 className="text-4xl font-bold inline text-green-300 px-8">{h1}</h1>
      <h2 className="text-2xl font-bold text-green-300 px-8">{children}</h2>
      <hr className="h-2 border-none bg-green-200"/>
    </header>
  )
}
