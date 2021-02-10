import React from "react";

import Adresses from "./Adresses";
import Firm from "./Firm";

const AddedInfo = () => {
  return (
    <div className="mobile_info">
      <div className="adress_info">
        <Adresses />
      </div>
      <div className="firm_info">
        <Firm />
      </div>{" "}
    </div>
  );
};

export default AddedInfo;
