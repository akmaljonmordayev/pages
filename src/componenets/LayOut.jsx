import React from "react";
import Footer from "./Footer";
import Header from "./Header";
function LayOut({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default LayOut;
