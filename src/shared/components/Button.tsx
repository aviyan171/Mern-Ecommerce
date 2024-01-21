interface IPros {
  onClick: VoidFunction;
  text: string;
  suffix?: boolean;
  prefix?: boolean;
  icon?: React.ReactNode;
  background: 'white' | 'black';
}
function Button({ onClick, text, suffix, prefix, icon, background }: IPros) {
  return (
    <button
      className={`${
        background === 'black' ? ' button-custom' : 'button-bg-white'
      } items-center border-2 border-slate-300`}
      onClick={onClick}
    >
      <div className="flex gap-3">
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
};
export default Button;
