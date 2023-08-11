<<<<<<< HEAD
import * as serviceWorker from "./serviceWorker";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App";

=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import serviceWorker from "./serviceWorker.js";

import App from "./App.js";

>>>>>>> 38222b1 (Navbar works)
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
<<<<<<< HEAD
serviceWorker.unregister();
=======

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
>>>>>>> 38222b1 (Navbar works)
