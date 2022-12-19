import React from "react";
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

const BillingForm = () => {
  return (
    <FormControl isRequired>
      <FormLabel fontWeight={300}>Postal Code</FormLabel>
      <Input
        placeholder="Postal or Zip Code"
        borderRadius="2px"
        fontSize="13px"
      />
      <FormLabel fontWeight={300}>State / Province / Region</FormLabel>
      <Select
        placeholder="Select one"
        fontWeight="700"
        borderRadius="2px"
        fontSize="13px"
      >
        <option>Andaman and Nicobar Islands</option>
        <option>Andhra Pradesh</option>
        <option>Arunachal Pradesh</option>
        <option>Assam</option>
        <option>Bihar</option>
        <option>Chandigarh</option>
        <option>Delhi</option>
        <option>Goa</option>
        <option>Gujarat</option>
        <option>Haryana</option>
        <option>Himachal Pradesh</option>
        <option>Jammu Kashmir</option>
        <option>Jharkhand</option>
        <option>Karnataka</option>
        <option>Kerala</option>
        <option>Ladakh</option>
        <option>Lakshadweep</option>
        <option>Madhya Pradesh</option>
        <option>Maharashtra</option>
        <option>Manipur</option>
        <option>Meghalaya</option>
        <option>Mizoram</option>
        <option>Nagaland</option>
        <option>Odisha</option>
        <option>Puducherry</option>
        <option>Punjab</option>
        <option>Rajasthan</option>
        <option>Sikkim</option>
        <option>Tamil Nadu</option>
        <option>Telangana</option>
        <option>Tripura</option>
        <option>Uttar Pradesh</option>
        <option>Uttrakhand</option>
        <option>West Bengal</option>
      </Select>

      <FormLabel fontWeight={300}>First name</FormLabel>
      <Input placeholder="First name" fontSize="13px" borderRadius="2px" />

      <FormLabel fontWeight={300}>Country</FormLabel>
      <Select
        placeholder="Select country"
        fontSize="13px"
        fontWeight="700"
        borderRadius="2px"
      >
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
        <option>India</option>
        <option>China</option>
        <option>United States</option>
        <option>United Kingdom</option>
        <option>Japan</option>
        <option>Russia</option>
      </Select>
    </FormControl>
  );
};

export default BillingForm;
