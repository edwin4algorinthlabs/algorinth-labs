import Contact from "@/components/contact/Contact"
import ContactMobile from "@/components/contact/ContactMobile"


const ContactPage = () => {
  return (
     <div className="pt-[120px] orange-gradient">
            {/* Desktop view */}
            <div className="hidden sm:block">
                <Contact />
            </div>
            {/* Mobile view */}
            <div className="block sm:hidden">
                <ContactMobile />
            </div>
        </div>
  );
};

export default Contact;
