export default function GradientBg({ children, classNames = '', href = "#", startColor = 'from-indigo-600', endColor ='to-indigo-300' }){
  const templateClassnames = `px-6 py-3 bg-gradient-to-r ${startColor} ${endColor} text-white rounded-full text-xl`
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
