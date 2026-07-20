
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import Section from "../ui/Section";

export default function ContactSection() {
  return (
    <Section className="bg-[#F8FAFC] !py-10">
      <div className="mx-auto  px-6">
        <div className="grid gap-12 lg:grid-cols-[360px_1fr]">
          {/* Left */}
          <ContactInfo />

          {/* Right */}
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}