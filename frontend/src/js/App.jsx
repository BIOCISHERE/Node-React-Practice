import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import RootLayout from "./layout/RootLayout";
import NotFound from "./component/NotFound";
import injectContext from "./store/appContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="demo" element={<Demo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default injectContext(App);
