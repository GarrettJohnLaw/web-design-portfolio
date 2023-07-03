import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import PagesError404 from "./pages/Notfound";
import "./scss/bootstrap-5.0.2/scss/bootstrap.scss";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function Root() {
  return (
    <div className="d-flex flex-column bg-black root-container">
      <Navbar />
      <div className="p-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
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
