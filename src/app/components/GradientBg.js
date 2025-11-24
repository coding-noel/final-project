export default function GradientBg({ children, classNames = '', href = "#" }){
  const templateClassnames = `px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-300 text-white rounded-full text-xl`
  return href ? (
    <a href={href} className={`${templateClassnames} block ${classNames}`}>
      {children}
    </a> 
  ) : (
    <div className={`${templateClassnames} ${classNames}`}>
      {children}
    </div>
  )
}
