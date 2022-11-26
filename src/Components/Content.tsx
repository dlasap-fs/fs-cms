import { useState, createContext, useContext } from "react";
import { TabContext } from "../Context/Context";
import CMSForm from "./CMSForm/CMSForm";
import CMSRecords from "./Records/CMSRecords";
import Records from "./Records/Records";

const Content = () => {
  const { tab } = useContext(TabContext);

  return <>{tab === "form" ? <CMSForm /> : <CMSRecords />}</>;
};

export default Content;
