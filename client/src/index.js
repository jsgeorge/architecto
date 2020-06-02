import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./SpryAssets/SpryMenuBarVertical.css";
import "./themes/default/default.css";
import "./themes/pascal/pascal.css";
import "./themes/orman/orman.css";
import "./css/nivo-slider.css";
// import "./scripts/jquery-1.6.4.min.js";
// import "./scripts/misc.js";
// import "./scripts/jquery.nivo.slider.pack.js";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
