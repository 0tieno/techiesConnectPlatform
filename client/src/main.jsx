import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import DiscussionForumPage from './pages/DiscussionForumPage.jsx'
import EventCalendar from './pages/EventCalendar.jsx'
import JobBoard from './pages/JobBoard.jsx'
import LearningResources from './pages/LearningResources.jsx'
import UserProfilePage from './pages/UserProfilePage.jsx'
import Login from './pages/Authentication/Login.jsx'
import Signup from './pages/Authentication/Signup.jsx'
// import './index.css'
import [createBrowserRouter,RouterProvider] from "react-router-dom"

const paths = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/signup",
    element:<Signup/>,
  },
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"/discussion_forum",
    element:<DiscussionForumPage/>,
  },
  {
    path:"/event_calendar",
    element:<EventCalendar/>,
  },
  {
    path:"/job_board",
    element:<JobBoard/>,
  },
  {
    path:"/learning_resources",
    element:<LearningResources/>,
  },
  {
    path:"/user_profile/:id",
    element:<UserProfilePage/>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={paths}  />
  </React.StrictMode>,
)
