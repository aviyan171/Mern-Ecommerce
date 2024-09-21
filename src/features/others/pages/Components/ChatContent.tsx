import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import ChatFooter from './ChatFooter'

function ChatContent() {
  return (
    <div className="bg-alabaster fixed right-23  bottom-[70px] w-80 h-100 ">
      <div>
        <ChatHeader />
        <ChatBody />
        <ChatFooter />
      </div>
    </div>
  )
}

export default ChatContent
