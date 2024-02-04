import { FormProvider, useForm } from 'react-hook-form';
import Button from 'shared/components/Button';
import FormInput from 'shared/components/form/FormInput';
import { contactFormDefaultValues } from '../constants';
import { IContactForm } from '../interface';

const defaultValues = contactFormDefaultValues;
function ContactForm() {
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = (data: IContactForm) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-5">
          <FormInput label="Name" name="name" placeholder="Name" />
          <FormInput label="Email" name="email" placeholder="Email" />
        </div>
        <div className="my-7">
          <FormInput multiline name="message" label="Message" />
        </div>
        <Button text="Send Message " type="submit" />
      </form>
    </FormProvider>
  );
}

export default ContactForm;
