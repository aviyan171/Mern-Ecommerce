import GoogleMapLocation from 'shared/components/GoogleMapLocation';
import MaxWidthLayout from 'shared/layout/MaxWidthLayout';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

function Contacts() {
  return (
    <div>
      <GoogleMapLocation />
      <MaxWidthLayout>
        <div className="flex py-25 gap-7">
          <div className="flex-[1]">
            <ContactDetails />
          </div>
          <div className="flex-[1]">
            <ContactForm />
          </div>
        </div>
      </MaxWidthLayout>
    </div>
  );
}

export default Contacts;
