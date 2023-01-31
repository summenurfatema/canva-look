import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { RouterProvider } from "react-router-dom";
import { router } from "./Root/router";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
