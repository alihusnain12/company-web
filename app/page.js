import BusinessFeatures from "@/components/companyFeatues";
import Features from "@/components/features";
import Help from "@/components/help";
import Main from "@/components/main";
import React from "react";
import Bugs from "@/components/bugs";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import ScrollRefesh from "@/components/scrollTop/scroll";

const Page = () => {
  return (
    <div >
      <ScrollRefesh/>
      <Main />
      <Features />
      <Help />
      <BusinessFeatures />
      <Bugs/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Page;
