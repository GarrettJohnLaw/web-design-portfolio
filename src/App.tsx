import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import PagesError404 from "./pages/NotFound";
import "./scss/bootstrap.min.css";
import Navbar from "./components/Navbar";

function Root() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/* <div className="bg-body-secondary px-3 flex-grow-1"> */}
      <Outlet />
      {/* </div> */}
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="*" element={<PagesError404 />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
