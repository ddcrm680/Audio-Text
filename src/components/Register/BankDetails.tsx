import { PAYMENT_METHODS } from "@/utils/constants";
import FormInput from "../Form/FormInput";
import FormSection from "../Form/FormSection";
import FormSelect from "../Form/FormSelect";
import FormTextarea from "../Form/FormTextarea";
import FormUpload from "../Form/FormUpload";
import { Banknote, Landmark, Wallet } from "lucide-react";

export default function BankDetails() {
  return (
    <section id="bank" className="scroll-mt-[112px]">
      <FormSection icon={Landmark} title="Bank Details">
        <div className="grid gap-4">
          {/* Row 1 */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput name="beneficiaryName" label="Beneficiary Name" />

            <FormInput name="bankName" label="Bank Name" />
          </div>

          {/* Row 2 */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormTextarea
              name="beneficiaryAddress"
              label="Beneficiary Address"
              rows={3}
            />

            <FormTextarea name="bankAddress" label="Bank Address" rows={3} />
          </div>

          {/* Row 3 */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormInput name="accountNumber" label="Account Number / IBAN" />

            <FormInput name="swiftCode" label="SWIFT Code" />
          </div>

          {/* Row 4 */}
          <div className="grid gap-4 lg:grid-cols-1">
            <FormTextarea
              name="additionalInformation"
              label="Additional Information"
              rows={2}
            />

            <FormUpload
              name="uploadId"
              label="Upload ID (Beneficiary)"
              required
              maxFiles={3}
            />
          </div>

          {/* Row 5 */}
          <div className="grid gap-4 md:grid-cols-2">
            <FormSelect
              name="paymentMethod"
              label="Payment Method"
              options={PAYMENT_METHODS}
            />

            <FormInput
              name="captcha"
              label="1 + 1 = ?"
              required
              type="number"
            />
          </div>
        </div>
      </FormSection>
    </section>
  );
}
