import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("../pages/notFound/notFound"));
const Main = lazy(() => import("../pages/main/main"));
const Registration = lazy(() => import("../pages/registration/registration"));
const RegistrationSucces = lazy(() =>
  import("../pages/registration/registrationSucces")
);
const Calendar = lazy(() => import("../pages/calendar/calendar"));

export default function Routes() {

  function getComponent(Component) {
    return (
      <Suspense>
        <Component />
      </Suspense>
    );
  }

  const router = [
    {
      path: "/",
      element: getComponent(Main),
    },
    {
      path: "registration",
      element: getComponent(Registration),

    },
    {
      path: "registration/succes",
      element: getComponent(RegistrationSucces),
    },
    {
      path: "calendar",
      element: getComponent(Calendar),
    },

    {
      path: "*",
      element: getComponent(NotFound),
    },
  ];
  return router;
}
