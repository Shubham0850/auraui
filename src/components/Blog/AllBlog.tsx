import React from "react";
import Link from "next/link";
import BlogGrid from "./BlogGrid";
import ComponentWrapper from "../Theme/ComponentWrapper";

const AllBlog = () => {
  return (
    <div>
      <ComponentWrapper
        title="BLogGrid Component"
        previewLink="/components/blog/Elements#bloggrid-component"
      >
        <BlogGrid />
      </ComponentWrapper>
    </div>
  );
};

export default AllBlog;
