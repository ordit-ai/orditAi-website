import { Route, Routes } from "react-router-dom";
import WebsiteLayout from "./Layouts/WebsiteLayout";
import Home from "./pages/Home";
import { APP_ROUTES } from "./constants/app-routes";
import { routes } from "./utils/routes";

function App() {
  const Element = {
    [APP_ROUTES.HOME]: <Home />,
  };

  return (
    <Routes>
      <Route path="/" element={<WebsiteLayout />}>
        {routes?.map((route) => <Route key={route.path} path={route.path} element={Element[route.path]} />)}
      </Route>
    </Routes>
  );
}

export default App;
