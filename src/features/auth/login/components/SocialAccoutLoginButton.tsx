interface IProps {
  icon: React.ReactNode
  text: string
  onClick: VoidFunction
}

function SocialAccountLoginButton({ icon, text, onClick }: IProps) {
  return (
    <div className="border-[1px] border-black px-4 py-2  rounded-s-xl rounded-e-xl cursor-pointer" onClick={onClick}>
      <div className="flex  items-center ">
        <div className="mr-10">{icon}</div>
        <div>Continue with {text}</div>
      </div>
    </div>
  )
}

export default SocialAccountLoginButton
