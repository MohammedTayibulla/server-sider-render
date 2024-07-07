import React from "react";
import { Helmet } from 'react-helmet';

const HomeModule = () => {
  return (
    <>
      <Helmet>
        <title>Home Module Title</title>
        <meta name="description" content="Home Module Description" />
        <meta property="og:image" content="https://admin.aventuras.co.in/uploads/mike_swigunski_Of_u2a_Pwugw_unsplash_10b4088c2e.jpg" />
      </Helmet>

   <h1>Nested Home module</h1>
    </>
  );
};

export default HomeModule;
