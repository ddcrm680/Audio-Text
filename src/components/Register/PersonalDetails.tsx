import { useFormikContext } from "formik";
import FormDatePicker from "../Form/FormDatePicker";
import FormInput from "../Form/FormInput";
import FormSection from "../Form/FormSection";
import FormSelect from "../Form/FormSelect";
import FormTextarea from "../Form/FormTextarea";
import { Country, State, City } from "country-state-city";
export default function PersonalDetails() {
  const countries = Country.getAllCountries().map((country) => ({
    label: country.name,
    value: country.isoCode,
  }));
  const { values } = useFormikContext<any>();
  const states = State.getStatesOfCountry(values.country).map((state) => ({
    label: state.name,
    value: state.isoCode,
  }));
  const cities = City.getCitiesOfState(values.country, values.state).map(
    (city) => ({
      label: city.name,
      value: city.name,
    }),
  );
  return (
    <FormSection title="Personal Details">
      <div className="grid gap-5">
        {/* Row 1 */}
        <div className="grid gap-5 md:grid-cols-2">
          <FormInput name="firstName" label="First Name" required />

          <FormInput name="lastName" label="Last Name" required />
        </div>

        {/* Row 2 */}
        <div className="grid gap-5 md:grid-cols-2">
          <FormDatePicker name="dateOfBirth" label="Date Of Birth" />

          <FormTextarea name="street" label="Street" required rows={3} />
        </div>

        {/* Row 3 */}
        <div className="grid gap-5 md:grid-cols-3">
          <FormSelect
            name="country"
            label="Country"
            required
            placeholder="Select Country"
            options={countries}
          />

          <FormSelect
            name="state"
            label="State"
            required
            placeholder="Select State"
            options={states}
          />

          <FormSelect
            name="city"
            label="City"
            required
            placeholder="Select City"
            options={cities}
          />
        </div>

        {/* Row 4 */}
        <div className="grid gap-5 md:grid-cols-2">
          <FormInput name="zipCode" label="Zip Code" required />
        </div>
      </div>
    </FormSection>
  );
}
