import { BsArrowUp } from 'react-icons/bs';
import cashIcon from '../../../../shared/assets/png/cash.png';

function SitePerformanceCard() {
  return (
    <div className="py-8 px-6 bg-white  flex justify-between rounded-3xl shadow-md">
      <div>
        <p className="font-semibold tracking-widest">BUDGET</p>
        <p className="mt-3 font-bold text-3xl">$24K</p>
        <div className="mt-4 text-green-400 flex gap-2 items-center ">
          <BsArrowUp />
          <p>12%</p>
          <p className="text-sm text-black">Since last month</p>
        </div>
      </div>
      <div className="h-[56px] w-[56px]">
        <img src={cashIcon} />
      </div>
    </div>
  );
}

export default SitePerformanceCard;
