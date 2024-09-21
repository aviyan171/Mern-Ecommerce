import React, { useState } from 'react'
import { FaFacebookMessenger } from 'react-icons/fa'
import ChatContent from './Components/ChatContent'

function Others() {
  const [toggleChat, setToggleChat] = useState(false)
  return (
    <div>
      <div
        onClick={() => setToggleChat(!toggleChat)}
        className="fixed bottom-[10px] right-20 rounded-full h-12 w-12 cursor-pointer border-2 border-blue-300 bg-white shadow-lg  "
      >
        <div className="flex items-center justify-center h-full">
          <FaFacebookMessenger color="blue" size={24} />
        </div>
      </div>

      {toggleChat && <ChatContent />}
    </div>
  )
}

export default Others
