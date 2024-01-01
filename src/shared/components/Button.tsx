import { BsArrowRight } from 'react-icons/bs';

interface IPros {
  onClick: VoidFunction;
  text: string;
}
const Button = ({ onClick, text }: IPros) => {
  return (
    <button className="button-custom items-center " onClick={onClick}>
      <div className="flex gap-3">
        <p className="tracking-widest text-sm uppercase">{text}</p>
        <BsArrowRight />
      </div>
    </button>
  );
};

export default Button;
