import React from "react";
import CourseHero from "./Course";
import BlogComponent from "./Blog";
import EmailCampaignHero from "./EmailCampaign";
import FeedbackHero from "./Feedback";
import Link from "next/link";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllHero = () => {
  return (
    <div>
      <ComponentWrapper
        title="CourseHero Component"
        previewLink="/components/hero/Elements#coursehero-component"
      >
        <CourseHero />
      </ComponentWrapper>
      <ComponentWrapper
        title="EmailCampaign Component"
        previewLink="/components/hero/Elements#emailcampaign-component"
      >
        <EmailCampaignHero />
      </ComponentWrapper>
      <ComponentWrapper
        title="Feedback Component"
        previewLink="/components/hero/Elements#feedback-hero-component"
      >
        <FeedbackHero />
      </ComponentWrapper>
    </div>
  );
};

export default AllHero;
