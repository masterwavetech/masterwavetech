import React from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { PageTitle } from "../components";
import { useLocation } from "react-router-dom";

const Servicepage = () => {
  const location = useLocation();
  const title = location.pathname.split("/")[1];
  return (
    <>
      <Helmet title={"services"}>
        <PageTitle title={title} />
      </Helmet>
    </>
  );
};

export default Servicepage;
