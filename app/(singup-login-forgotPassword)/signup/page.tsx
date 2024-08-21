import AccountSuccess from "@/components/AccountSuccess";
import CompanySignUpForm from "@/components/Forms/SignUp/CompanySignUpForm";
import SignUpForm from "@/components/Forms/SignUpForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      {/* <SignUpForm /> */}
      {/* <CompanySignUpForm />
       */}
      <AccountSuccess />
    </div>
  );
};

export default page;
