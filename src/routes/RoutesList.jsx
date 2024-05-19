import { useRoutes } from "react-router-dom";
import  Routes  from "./routes";

export default function RoutesList() {

  const element = useRoutes(Routes());

  return element;
}
