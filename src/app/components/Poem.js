import { truncate } from '@/utils/utils'
import GradientBg from './GradientBg'

export default function Card({ title = "Put title here", poem = "Put poem here" }) {
  return (
    <div className="grow w-96 flex flex-col rounded-lg transition-all shadow-lg">
      <div className="p-4">
        <GradientBg className="text-xl font-bold text-blue-600">{title}</GradientBg>
        <pre className='p-6 font-serif text-blue-600'>{truncate(poem)}</pre>
      </div>
    </div>
  )
}
