import React from "react";
import ReactDOM from "react-dom/client";
//Page imports
import App from "./App.jsx";
import DiscussionForumPage from "./pages/DiscussionForumPage.jsx";
import EventCalendar from "./pages/EventCalendar.jsx";
import JobBoard from "./pages/JobBoard.jsx";
import LearningResources from "./pages/LearningResources.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
//Authentication pages
import Login from "./pages/Authentication/Login.jsx";
import Signup from "./pages/Authentication/Signup.jsx";
//react-router-dom utilities
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// importing chakra ui
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// colors for themes
const colors = {
  brand: {
    900: "#F0F600",
    800: "#246802",
    700: "#FFFFFF",
    600: "#222222",
    500:"#F2F2ED"
  },
};

const Theme = extendTheme({ colors });

const paths = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/discussion_forum",
    element: <DiscussionForumPage />,
  },
  {
    path: "/event_calendar",
    element: <EventCalendar />,
  },
  {
    path: "/job_board",
    element: <JobBoard />,
  },
  {
    path: "/learning_resources",
    element: <LearningResources />,
  },
  {
    path: "/user_profile/:id",
    element: <UserProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <RouterProvider router={paths} />
    </ChakraProvider>
  </React.StrictMode>
);
