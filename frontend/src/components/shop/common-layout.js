import React from "react";
import Header from "../headers/headers";

const CommonLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet> */}
<Header />
      <>{children}</>
    </>
  );
};

export default CommonLayout;