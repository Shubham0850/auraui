import React from "react";
import Link from "next/link";
import Designers from "./Designers";
import Devlopers from "./Devlopers";
import Buisness from "./Buisness";
import Devs from "./Devs";
import Jobs from "./Jobs";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllTestimonial = () => {
  return (
    <div>
      <ComponentWrapper
        title="Testimonial for Designers"
        previewLink="/components/testimonial/Elements#testimonial-for-designers"
      >
        <Designers />
      </ComponentWrapper>
      <ComponentWrapper
        title="Testimonial for Developers"
        previewLink="/components/testimonial/Elements#testimonial-for-developers"
      >
        <Designers />
      </ComponentWrapper>
    </div>
  );
};

export default AllTestimonial;
