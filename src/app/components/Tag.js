export default function Tag({ content = 'New', classNames = '' }){
  return <div className={`flex items-center justify-center h-6 leading-none px-2 py-0.5 bg-gradient-to-r from-indigo-200 to-indigo-600 text-cyan-100 rounded-full text-sm ${classNames}`}>{content}</div>
}
