import React from "react";
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page Title</title>
        <meta name="description" content="Home Page Description" />
        <meta property="og:image" content="https://admin.aventuras.co.in//uploads/kishorbiswas10_28_01_2023_0008_6a498a4529.jpg" />
      </Helmet>
    
    <h1>Home</h1>
    </>
  );
};
export default Home;
