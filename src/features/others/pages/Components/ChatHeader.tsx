import { FaCamera, FaMinus, FaPhoneAlt, FaTimes } from 'react-icons/fa'
import Avatar from 'shared/components/Avatar'
import Divider from 'shared/components/Divider'

function ChatHeader() {
  return (
    <div className="relative top-0 w-full z-1">
      <div className="p-3 flex justify-between items-center">
        <div className="flex gap-2">
          <Avatar name="A" height="10" width="10" />
          <div>
            <p className="text-sm">Abhiyan Upreti</p>
            <p className="text-sm text-gray-400">Active Now</p>
          </div>
        </div>
        <div className="flex gap-3 ">
          <FaPhoneAlt className="cursor-pointer" />
          <FaCamera className="cursor-pointer" />
          <FaMinus className="cursor-pointer" />
          <FaTimes className="cursor-pointer" />
        </div>
      </div>
      <Divider />
    </div>
  )
}

export default ChatHeader
