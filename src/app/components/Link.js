export default function Link({ href ='#', classNames = '', children }){
  return <a href={href} className={`hover:text-blue-700 text-green-400 underline ${classNames}`}>{children}</a>
}