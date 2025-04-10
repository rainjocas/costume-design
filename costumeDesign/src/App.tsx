import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import AiLee from "./pages/Ai-Lee-Woods";
import Anna from "./pages/Anna-Monaghan";
import Declan from "./pages/Declan-OConnell";
import Elana from "./pages/Elana-Sheinkopf";
import Erica from "./pages/Erica-Erdenesanaa";
import Martina from "./pages/Martina-Tognato-Guaqueta";
import Mira from "./pages/Mira-Pickus";
import Molly from "./pages/Molly-Richardson";
import Rain from "./pages/Rain-Jocas";
import Space from "./pages/Space-Pace";
import Tali from "./pages/Tali-Serlin";
import Zoe from "./pages/Zoe-Buettner";
import Gwen from "./pages/Gwen-Gleason";

/**
 * The router will send different URLs to different pages, and let us link between them all.
 * https://reactrouter.com/en/main/start/tutorial has the documentation for this, and all the features
 * available to use. Check it out if you want to add a page!
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/Ai-Lee-Woods",
    element: <AiLee/>,
  },
  {
    path: "/Anna-Monaghan",
    element: <Anna/>,
  },
  {
    path: "/Declan-OConnell",
    element: <Declan/>,
  },
  {
    path: "/Elana-Sheinkopf",
    element: <Elana/>,
  },
  {
    path: "/Erica-Erdenesanaa",
    element: <Erica/>,
  },
  {
    path: "/Gwen-Gleason",
    element: <Gwen/>,
  },
  {
    path: "/Martina-Tognato-Guaqueta",
    element: <Martina/>,
  },
  {
    path: "/Mira-Pickus",
    element: <Mira/>,
  },
  {
    path: "/Molly-Richardson",
    element: <Molly/>,
  },
  {
    path: "/Rain-Jocas",
    element: <Rain/>,
  },
  {
    path: "/Space-Pace",
    element: <Space/>,
  },
  {
    path: "/Tali-Serlin",
    element: <Tali/>,
  },
  {
    path: "/Zoe-Buettner",
    element: <Zoe/>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;