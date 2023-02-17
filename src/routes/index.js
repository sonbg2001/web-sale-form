import pages from "../pages";
import paths from "./paths";
import Layouts from "../components/layouts";
const publicRoutes = [
  {
    path: paths.home,
    component: pages.Home,
    layout: Layouts.defaultLayout,
  },
  {
    path: paths.search,
    component: pages.Home,
    layout: Layouts.defaultLayout,
  },
];
const privateRoutes = [
  {
    path: paths.home,
    component: pages.Home,
    layout: Layouts.defaultLayout,
  },
];

export { publicRoutes, privateRoutes };
