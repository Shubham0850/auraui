import React from "react";
import ComponentWrapper from "../Theme/ComponentWrapper";
import NewsletterSubscription from "./NewsletterSubscription";

const AllNewsLetter = () => {
  return (
    <div>
      <ComponentWrapper
        title="Newsletter Subscription"
        previewLink="/components/newsletter/Elements#newslettersubscription"
      >
        <NewsletterSubscription />
      </ComponentWrapper>
    </div>
  );
};

export default AllNewsLetter;
