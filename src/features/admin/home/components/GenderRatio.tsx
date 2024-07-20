import { DoughnutChart } from 'shared/components/DoughnutChart'

export function GenderRatio() {
  return (
    <div className="bg-white rounded-lg shadow-lg px-6 pt-6 pb-4">
      <p className="font-bold text-xl mb-4">Gender Ratio</p>
      <DoughnutChart colorArray={['pink', 'blue', 'red']} data={[55, 50, 5]} label="Gender Ratio" labels={['Female', 'Male', 'Others']} />
      <div className="flex mt-4 justify-center gap-4">
        <div>
          <p>Male</p>
          <p>55%</p>
        </div>
        <div>
          <p>Female</p>
          <p>50%</p>
        </div>
        <div>
          <p>Others</p>
          <p>5%</p>
        </div>
      </div>
    </div>
  )
}
