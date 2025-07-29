import React, { useState } from "react";
import "../index.css"
import { Aside } from "./Aside";
import Header from "./Header";
import { MainContent } from "./MainContent";
export function Body() {
  const [asideActive, setAsideActive] = useState(false);
  const toggleAside = () => setAsideActive((prev) => !prev);
  return (
    <>
      <div className="body">
        <Aside active={asideActive} toggle={toggleAside} />
        <div className="rigth">
          <Header toggle={toggleAside} />
          <MainContent />
        </div>
      </div>
    </>
  );
}
