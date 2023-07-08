import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import PagesError404 from "./pages/Notfound";
import "./scss/bootstrap-5.0.2/scss/bootstrap.scss";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import GetStarted from "./pages/Get-Started";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function Root() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-black root-container flex-grow-1">
      <Navbar />
      <div className="flex-grow-1">
        <Outlet />
      </div>
      <Footer />
      <Analytics />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/get-started" element={<GetStarted />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="*" element={<PagesError404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
