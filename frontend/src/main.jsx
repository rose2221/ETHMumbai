import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './normalize.css'
import App from './App.jsx'
import Connect from './Connect/Connect.jsx'
import Nav from './Nav/Nav.jsx'
import AddBar from './AddBar/AddBar.jsx'
import Channel from './Channel/Channel.jsx';
import './Connect/connect.css'
import './App.css'
import './index.css'
import './Nav/nav.css'
import './Channel/channel.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <App />
    </>,
  },
  {
    path: "/connect",
    element: <>
      <Nav />
      <Connect />
    </>,
  },
  {
    path: "/add",
    element: <>
      <AddBar />
      <Channel />
    </>,
  },
  
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}>
   <NextUIProvider>
    <App />
   </NextUIProvider>
  </RouterProvider>
</React.StrictMode>,
)

