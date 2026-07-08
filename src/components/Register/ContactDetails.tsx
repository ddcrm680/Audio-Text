import { Phone } from "lucide-react";
import FormInput from "../Form/FormInput";
import FormSection from "../Form/FormSection";

export default function ContactDetails() {
  return (
    <FormSection icon={Phone} title="Contact Details">
      <div className="grid gap-4 md:grid-cols-2">
        <FormInput name="contactNo" label="Contact No" required type="tel" />

        <FormInput name="email" label="Email" required type="email" />

        <FormInput name="skypeId" label="Skype ID" required />

        <FormInput name="otherImId" label="Any other IM ID" />
      </div>
    </FormSection>
  );
}
