export default function Button({ children, classNames = '' }){
  return <div className={`px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white rounded-full text-xl ${classNames}`}>{children}</div>
}
