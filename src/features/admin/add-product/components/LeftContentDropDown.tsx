import FormSelect from 'shared/components/form/FormSelect';

interface IProps {
  data: { label: string; value: string }[];
  name: string;
  title: string;
  desc: string;
  defaultOptionName: string;
}
export function LeftContentDropDown({
  data,
  name,
  desc,
  title,
  defaultOptionName,
}: IProps) {
  return (
    <div className="shadow-lg rounded-sm p-9">
      <p className="font-bold mb-3">{title}</p>
      <FormSelect
        name={name}
        data={data}
        defaultOptionName={defaultOptionName}
      />
      <p className="leading-10 text-xs">{desc}</p>
    </div>
  );
}
