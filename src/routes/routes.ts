import { lazy } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { LazyLayout } from "../01-lazyload/layout/LazyLayout";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;
interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLay = lazy(
  () =>
    import(/* webpackChunkName:"LazyLay" */ "../01-lazyload/layout/LazyLayout")
);

export const routes: Route[] = [
  {
    to: "/lazyload/",
    path: "/lazyload/*",
    Component: LazyLay,
    name: "Lazy Layout Dash",
  },
  {
    to: "/no-lazy",
    path: "no-lazy",
    Component: NoLazy,
    name: "No lazy",
  },
];
