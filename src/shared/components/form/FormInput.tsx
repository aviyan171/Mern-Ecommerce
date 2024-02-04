import { useFormContext } from 'react-hook-form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isRequired?: boolean;
}
function FormInput({ name, label, isRequired = false, ...props }: IProps) {
  const { register } = useFormContext();
  return (
    <div>
      <p className="mb-3 text-sm">
        {label} <span className="text-red-500">{isRequired ? '*' : ''}</span>
      </p>
      <input
        {...props}
        {...register(name)}
        type="text"
        className="h-[50px] border-[1px] border-slate-300  focus:outline-none pl-5 text-slate-400 w-full"
      />
    </div>
  );
}

export default FormInput;
