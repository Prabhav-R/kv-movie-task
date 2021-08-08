import React from "react";

import Add from "./Add";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";

import "./Styles.css";

const Root = () => {
  return (
    <div className="root">
      <Header />
      <List />
      <Add />
      <Footer />
    </div>
  );
};

export default Root;
