import { useFormContext } from 'react-hook-form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isRequired?: boolean;
  multiline?: boolean;
  rows?: number;
}
function FormInput({
  name,
  label,
  isRequired = false,
  multiline = false,
  rows = 7,
  ...props
}: IProps) {
  const { register } = useFormContext();
  return (
    <div>
      <p className="mb-3 text-sm">
        {label} <span className="text-red-500">{isRequired ? '*' : ''}</span>
      </p>
      {!multiline ? (
        <input
          {...props}
          {...register(name)}
          className="h-[50px] border-[1px] text-sm border-slate-300  focus:outline-none pl-5 text-slate-400 w-full bg-transparent"
        />
      ) : (
        <textarea
          rows={rows}
          {...register(name)}
          className=" border-[1px] border-slate-300 text-sm focus:outline-none p-5 text-slate-400 w-full bg-transparent"
        />
      )}
    </div>
  );
}

export default FormInput;
