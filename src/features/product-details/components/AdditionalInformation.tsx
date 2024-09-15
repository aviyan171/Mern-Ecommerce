import { useState } from 'react'
import Divider from 'shared/components/Divider'

type Props = {
  description: string
}
function AdditionalInformation({ description }: Props) {
  const [tab, setTab] = useState(0)
  const data = ['Description', 'Customer Preview(5)', 'Additional information']

  const handleTab = (index: number) => {
    setTab(index)
  }

  return (
    <div>
      <div className="flex gap-10 justify-center  text-2xl text-slate-400">
        {data.map((i, index) => {
          return (
            <div
              key={i}
              onClick={() => handleTab(index)}
              className={`cursor-pointer border-b-2 ${index === tab ? 'border-red-500' : 'border-none'} pb-5`}
            >
              <p>{i}</p>
            </div>
          )
        })}
      </div>
      <Divider />
      <div className="py-9">
        {tab === 0 && <p>{description}</p>}
        {tab === 1 && <p>WIP !!</p>}
        {tab === 2 && <p>WIP</p>}
      </div>
    </div>
  )
}

export default AdditionalInformation
