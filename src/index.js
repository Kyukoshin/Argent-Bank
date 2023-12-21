import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Header from "../src/components/Header.jsx";
import Footer from "../src/components/Footer.jsx";

import App from "./app.js"; 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Header/>	
    <App/>
    <Footer/>
  </BrowserRouter>
);
