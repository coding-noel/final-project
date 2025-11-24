export default function Button({ children, href = null, classNameProp = '' }) {
  const classNames =
    `flex items-center justify-center flex-none px-6 py-4 text-lg bg-blue-300 hover:bg-indigo-300 active:bg-indigo-300 shadow-md transition-all cursor-pointer border-0 rounded-md ${classNameProp}`
  return href ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <button className={classNames}>{children}</button>
  )
}
