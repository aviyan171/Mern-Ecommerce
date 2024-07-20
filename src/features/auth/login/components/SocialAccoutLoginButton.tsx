interface IProps {
  icon: React.ReactNode
  text: string
  onClick?: VoidFunction
  type?: 'button' | 'submit'
}

function SocialAccountLoginButton({ icon, text, onClick, type = 'button' }: IProps) {
  return (
    <button onClick={onClick} type={type}>
      <div className="border-[1px] border-black px-4 py-2  rounded-s-xl rounded-e-xl cursor-pointer">
        <div className="flex  items-center ">
          <div className="mr-10">{icon}</div>
          <div>Continue with {text}</div>
        </div>
      </div>
    </button>
  )
}

export default SocialAccountLoginButton
