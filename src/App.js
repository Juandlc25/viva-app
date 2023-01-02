import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About/index";
import Clients from "./views/Clients/index";
import Contact from "./views/Contact/index";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/clients",
      element: <Clients />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
