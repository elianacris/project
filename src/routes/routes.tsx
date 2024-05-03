import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route Component={Home} path="/home" />
    </BrowserRouter>
  );
};
