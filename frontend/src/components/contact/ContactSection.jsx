import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <ContactDetails />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
