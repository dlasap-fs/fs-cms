import { useState, createContext, useContext } from "react";
import { TabContext } from "../Context/Context";

const SideBar = () => {
  const { _, setTab } = useContext(TabContext);

  const handleTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <>
      <div className="sidebar-button" onClick={() => handleTab("form")}>
        Form
      </div>
      <div className="sidebar-button" onClick={() => handleTab("records")}>
        Records
      </div>
    </>
  );
};

export default SideBar;
