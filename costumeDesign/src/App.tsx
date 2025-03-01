import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/**
 * The router will send different URLs to different pages, and let us link between them all.
 * https://reactrouter.com/en/main/start/tutorial has the documentation for this, and all the features
 * available to use. Check it out if you want to add a page!
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
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