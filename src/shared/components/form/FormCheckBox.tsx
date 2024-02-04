import { useFormContext } from 'react-hook-form';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  isRequired?: boolean;
}
function FormCheckBox({ name, label, isRequired = false, ...props }: IProps) {
  const { register } = useFormContext();
  return (
    <div>
      <input type="checkbox" {...register(name)} {...props} id={name} />
      <label htmlFor={name} className="text-sm ml-3 cursor-pointer">
        {label} <span className="text-red-500">{isRequired ? '*' : ''}</span>
      </label>
    </div>
  );
}

export default FormCheckBox;
