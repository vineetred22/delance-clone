import React, { useState } from "react";

import * as commonService from "../../../../utils/CommonService.js";

import "./loader.scss";

const Loader = () => {
  const [loading, setLoading] = useState(false);

  commonService.isLoading.subscribe(val => {
    if (loading !== val) setLoading(val);
  });

  return (
    <div id="globalLoader" className="progress-loader hide" hidden={false}>
      <div id="overlay"></div>
      <div className="ring">
        <span></span>
      </div>
    </div>
  );
};

export default Loader;
