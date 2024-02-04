interface IPros {
  onClick?: VoidFunction;
  text: string;
  suffix?: boolean;
  prefix?: boolean;
  icon?: React.ReactNode;
  background: 'white' | 'black';
  type?: 'button' | 'reset' | 'submit';
  fullWidth?: boolean;
}
function Button({
  onClick = undefined,
  text,
  suffix,
  prefix,
  icon,
  background,
  type,
  fullWidth = false,
}: IPros) {
  return (
    <button
      type={type}
      className={`${
        background === 'black' ? ' button-custom' : 'button-bg-white'
      } items-center border-2 border-slate-300 w-${
        fullWidth ? 'full' : 'auto'
      }`}
      onClick={onClick}
    >
      <div className="flex gap-3 justify-center">
        {suffix && icon}
        <p className="tracking-widest text-sm uppercase">{text}</p>
        {prefix && icon}
      </div>
    </button>
  );
}
Button.defaultProps = {
  suffix: false,
  prefix: false,
  icon: undefined,
  background: 'black',
  type: 'button',
};
export default Button;
