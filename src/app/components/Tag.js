export default function Button({ content = 'New', classNames = '' }){
  return <div className={`px-2 py-0.5 bg-gradient-to-r from-indigo-200 to-indigo-600 text-cyan-100 rounded-full text-sm ${classNames}`}>{content}</div>
}
