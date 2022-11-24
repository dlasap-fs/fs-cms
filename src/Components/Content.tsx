import { useState, createContext, useContext } from "react";
import { TabContext } from "../Context/Context";
import CMSForm from "./CMSForm/CMSForm";

const Content = () => {
  const { tab } = useContext(TabContext);

  return (
    <>
      <div className="content-body">{tab === "form" ? <CMSForm /> : <>records</>}</div>
    </>
  );
};

export default Content;
