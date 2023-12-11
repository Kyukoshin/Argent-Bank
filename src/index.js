import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./app.js"; 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
