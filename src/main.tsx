import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "@/layout.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/home";
import ProjectPage from "pages/project";
import AboutPage from "pages/about";
import { AppContextProvider } from "components/context/app.context.tsx";
import "@/i18n";
import "styles/global.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </StrictMode>
);
