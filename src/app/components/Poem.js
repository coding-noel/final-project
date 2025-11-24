import { truncate } from '@/utils/utils'
import GradientBg from './GradientBg'

export default function Poem({ props, layer }) {
  let target = ""
  if(layer) {
    for(let i = 0; i < layer; i++) {
      target += "../"
    }
  }
  target += "poem/"
  const { title, poemLines, id, numOfLines } = props;
  return (
    <div className="grow flex flex-col rounded-sm transition-all shadow-lg border-2 border-blue-200">
      <div className="p-4">
        <GradientBg className="text-xl font-bold text-blue-600" href={target + id}>{title}</GradientBg>
        <pre className='p-6 font-serif text-blue-600'>{truncate(poemLines)}{numOfLines>8 && <a href={"poem/" + id}>...</a>}</pre>
      </div>
    </div>
  )
}
